import { encode } from "msgpack-lite";
import { decode } from "msgpack-lite";
var Long = require("long");

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
 
cc.Class({
    extends: cc.Component,

    properties: {
      
    },

    // *  ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐
    // *       2   │   1   │    1   │     8     │      4      │
    // *  ├ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┤
    // *           │       │        │           │             │
    // *  │  MAGIC   Sign    Status   Invoke Id    Body Size                    Body Content              │
    // *           │       │        │           │             │
    // *  └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘
    // * * 消息头16个字节定长
    //  * = 2 // magic = (short) 0xbabe
    //  * + 1 // 消息标志位, 低地址4位用来表示消息类型request/response/heartbeat等, 高地址4位用来表示序列化类型
    //  * + 1 // 状态位, 设置请求响应状态
    //  * + 8 // 消息 id, long 类型, 未来jupiter可能将id限制在48位, 留出高地址的16位作为扩展字段
    //  * + 4 // 消息体 body 长度, int 类型
    //  *


     onLoad () {
        var self = this;

        var ipPort = "ws://192.168.0.103:9100/websocket";
        console.log(ipPort);
        this.ws = new WebSocket(ipPort);
        this.ws.binaryType = 'arraybuffer'; //这里设置为发送二进制数据

        this.ws.onopen = function (event) {
            console.log("open");
            var protoId = new Long(1000);
            const loginMessage =[11111,"leixuan","zzzz","100"]; 
            //打开成功立刻进行发送
            if (self.ws.readyState === WebSocket.OPEN) {
               
                let loginByteBuf = encode(loginMessage);
                let bodyLen = loginByteBuf.byteLength;
                let requestBody = new ArrayBuffer(2+1+1+8+4+bodyLen);

                let dataView = new DataView(requestBody);
                //魔数
                let magic = parseInt("0xbabe",16);
                let status = parseInt("0x20",16);
                let sign = 81;//这个值是固定表示
                dataView.setInt16(0,magic);
                dataView.setInt8(2,sign);
                dataView.setInt8(3,status);
                dataView.setBigUint64(4,protoId);
                dataView.setInt32(12,bodyLen);

                let bodyView = new Uint8Array(requestBody,16);
                for(var i=0 ,strLen = loginByteBuf.length; i < strLen; i++){
                    bodyView[i] = loginByteBuf[i];
                }

                self.ws.send(requestBody); //发送二进制数据
            }
        };

        this.ws.onmessage = function (event) {
            console.log("onmessage : " + event.data);
            let dataBuffer = event.data;
            let dv = new DataView(dataBuffer);
            let magic = dv.getInt16(0);
            let sign = dv.getInt8(2);
            let status = dv.getInt8(3);
            let protoId = dv.getBigUint64(4);
            let bodyLen = dv.getInt32(12);
            
            let bodyBuffer = new Uint8Array(dataBuffer.slice(16,dataBuffer.byteLength));
            let loginBuild = decode(bodyBuffer);       
            console.log(loginBuild);
        };

        this.ws.onerror = function (event) {
            console.log("on error :", event.data);
        };

        this.ws.onclose = function (event) {
            console.log("onclose");
        };
     },
  
    start () {
        
    },

    // update (dt) {},
});
