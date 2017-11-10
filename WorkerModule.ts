import * as net from 'net';

addEventListener("message", args => {
    let pipe = "aaa";
    let asyncConn = net.connect(pipe, () => {
        console.log(`${pipe} connection listener!`);
    });

    // result.on('data', data => {
    //     console.log(`${pipe} data: ${data.toString()}`);
    // });
    asyncConn.on('error', err => {
        console.log(`${pipe} error: ${err}`);
    });
    asyncConn.on('connect', () => {
        console.log(`${pipe} connected!`);
    });
    
    asyncConn.on('data', data => {
        //console.log("async receive: ", data.length);
        //postMessage({ MsgId: 42, assemblyVersionGuid: "asasdasd" }, "");
        process.send(data);
    });

    postMessage("You said: " + args.data);
});