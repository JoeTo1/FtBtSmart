
function getButtonState(state) {
    return Lang.get(state);
}

function getLightBarrierState(state) {
    return Lang.get(state);
}


var Lang = {

    // browser's language code
    langCode: (navigator.language || navigator.userLanguage).substr(0, 2),

    trans: {

        // german translation
        //de: {

        //    onOpenClose: 'Wenn %m.openCloseSensors %m.inputs %m.openClose',
        //    onCounter: 'Wenn Zähler %m.counters %m.compares %n',
        //    onInput: 'Wenn Wert von %m.inputSensors %m.inputs %m.compares %n',
        //    onRisingEdge: 'If value of %m.inputs',
        //    onFallingEdge: 'If value of %m.inputs',

        //    isClosed: '%m.openCloseSensors %m.inputs geschlossen?',
        //    getCounter: 'Lese Wert von Zähler %m.counters',
        //    getSensor: 'Lese Wert von %m.inputSensors %m.inputs',
        //    getMotorPower: 'Read power (0--8) of %m.motors',
        //    getMotorSpeed: 'Read speed (-8--0--8) of %m.motors',
        //    getMotorDir: 'Read direction of %m.motors',

        //    doPlaySound: 'Sound %n abspielen',
        //    doPlaySoundWait: 'Sound %n abspielen und warten',

        //    doSetLamp: 'Setze Lampe %m.outputs auf %n',
        //    doSetOutput: 'Setze Ausgang %m.outputs auf %n',
        //    doResetCounter: 'Setze Zähler %m.counters zurück',

        //    doSetMotorPower: 'Setze Motor %m.motors auf %n',
        //    doSetMotorPowerDir: 'Setze Motor %m.motors auf %n %m.motorDirections',
        //    doSetMotorDir: 'Setze Motor %m.motors auf %m.motorDirections2',

        //    doSetMotorPowerDirDist: 'Verfahre Motor %m.motors um %n Schritte mit %n %m.motorDirections',
        //    doSetMotorPowerDirSync: 'Verfahre Motor %m.motors %m.motorDirections und %m.motors %m.motorDirections mit %n',
        //    doSetMotorPowerDirDistSync: 'Verfahre Motor %m.motors %m.motorDirections und %m.motors %m.motorDirections mit %n für %n Schritte',

        //    doStopMotor: 'Stoppe Motor %m.motors',
        //    doStopMotorAdv: 'Stoppe Verfahren %m.motors',

        //    doConfigureInput: 'Setze Eingang %m.inputs auf %m.inputModes',
        //    doConfigureInputA: 'Set input analogue %m.inputs to %m.inputModesA',
        //    doConfigureInputD: 'Set input digital %m.inputs to %m.inputModesB with limit %n',

        //    dir_reverse: 'reverse',
        //    dir_non: 'non',
        //    dir_forward: 'vorwärts',
        //    dir_backwards: 'rückwärts',

        //    sens_color: 'Farbsensor',
        //    sens_distance: 'Abstandssensor',
        //    sens_ntc: 'NTC-Widerstand',
        //    sens_photo: 'Fotowiderstand',
        //    sens_lightBarrier: 'Lichtschranke',
        //    sens_button: 'Schalter',
        //    sens_reed: 'Reed-Kontakt',

        //    openclose_opens: 'öffnet',
        //    openclose_closes: 'schließt',

        //    mode_a5k: 'Widerstand analog',
        //    mode_d5k: 'Widerstand digital',
        //    mode_a10v: 'Spannung analog',
        //    mode_d10v: 'Spannung digital',
        //    mode_d10vg: 'Binary voltage greater',
        //    mode_d10vs: 'Binary voltage smaller or equal',
        //    mode_d5kg: 'Binary resistance greater',
        //    mode_d5ks: 'Binary resistance smaller or equal',
        //    mode_ultrasonic: 'Ultraschall',
        //    reset: 'zurücksetzen',
        //    doConnect: 'Connect BT Smart',
        //    doDisconnect: 'Disconnect BT Smart'
        //},

        en: {
         //   onOpenClose: 'If %m.openCloseSensors %m.inputs %m.openClose',
            onCounter: 'If counter %m.counters %m.compares %n',
            onInput: 'If x value of %m.inputSensors %m.inputs %m.compares %n',
            onRisingEdge: 'If value of %m.inputs rising (only binary mode: 0 to 1) ',
            onFallingEdge: 'If value of %m.inputs falling (only binary mode: 1 to 0)',
            onMotorDirectionChange: 'If direction of %m.motors has changed',
            onMotorDirectionForward: 'If direction of %m.motors became Forwards (CW)',
            onMotorDirectionBackward: 'If direction of %m.motors became Backwards (CCW)',
            onMotorDirectionStop: 'If direction of %m.motors became non (stop)',
            onInputLimitChange: 'If limit of %m.inputs has been changed',
            onOuputPowerChange: 'If power on %m.motors has been changed',

            isClosed: 'Is %m.openCloseSensors %m.inputs closed?',
            getCounter: 'Read value of counter %m.counters',
            getSensor: 'Read value of %m.inputSensors %m.inputs',
            getSensorA: 'Read value of %m.inputs (only analogue mode 0..65535))',
            getSensorB: 'Read value of %m.inputs (only binary mode true/false))',
            getSensorX: 'Read value of %m.inputs 0..65535 or 0..1)',
            getInputInfoText:'Read of %m.inputs info as text',


            getMotorDir: 'Read direction of %m.motors',
            getMotorSpeed: 'Read speed (-8 .. 0 .. 8) of %m.motors',
            getMotorPower: 'Read power (0 .. 8) of %m.motors',
            getMotorInfoText: 'Read of %m.motors info as text',

            doSetOutput: 'Set output %m.outputs to %n',
            doResetCounter: 'Reset counter %m.counters',
            doSetMotorPower: 'Set motor %m.motors to power %n (0 .. 8)',
            doSetMotorPowerDir: 'Set motor %m.motors to power %n (0 .. 8) and direction %m.motorDirections',
            doSetMotorSpeed: 'Set motor %m.motors to speed %n (-8 .. 0 .. 8) and direction %m.motorDirections',
            doSetMotorDir: 'Set motor %m.motors to %m.motorDirections2',
            doStopMotor: 'Stop motor %m.motors',
            doStopMotorAdv: 'Stop move %m.motors',
            doStopMotorAll: 'Stop all',
            doConfigureInput: 'Set input %m.inputs to %m.inputModes',
            doConfigureInputA: 'Set input analogue %m.inputs to %m.inputModesA',
            doConfigureInputD: 'Set input binary %m.inputs to %m.inputModesB with limit %n',
            doDisconnect: 'Disconnect from Server (BT Smart)',
            doConnect: 'Connect to Server (BT Smart)',
            reset: 'Reset',
            dir_reverse: 'reverse',
            dir_non: 'non',
            dir_forward: 'forward',
            dir_backward: 'backward',
            sens_color: 'Colour sensor',
            sens_distance: 'Distance sensor',
            sens_ntc: 'NTC resistance',
            sens_photo: 'Photo resistance',
            sens_lightBarrier: 'Light barrier',
            sens_button: 'Switch',
            sens_reed: 'Reed contact',
            openclose_opens: 'opens',
            openclose_closes: 'closes',
            mode_a5k: 'Analogue resistance',
            mode_d5k: 'Binary resistance',
            mode_a10v: 'Analogue voltage',
            mode_d10v: 'Binary voltage',
            mode_d10vg: 'Binary voltage greater',
            mode_d10vs: 'Binary voltage smaller or equal',
            mode_d5kg: 'Binary resistance greater',
            mode_d5ks: 'Binary resistance smaller or equal',
            hat_forward: '',
            hat_backward: '',
            hat_non: '',
            hat_falling: '',
            hat_rising: '',
            hat_limit: '',
            hat_power: '',
            hat_direction: ''

        }

        /*
        fr: {
            onOpenClose: 'Si %m.openCloseSensors %m.inputs %m.openClose',
            onCounter: 'Si compteur %m.counters %m.compares %n',
            onInput: 'Si valeur de %m.inputSensors %m.inputs %m.compares %n',
            isClosed: '%m.openCloseSensors %m.inputs fermé?',
            getCounter: 'Si lecture de valeur de compteur %m.counters',
            getSensor: 'Si lecture de valeur %m.inputSensors %m.inputs',
            doPlaySound: 'Jouer sound %n',
            doPlaySoundWait: 'Jouer sound %n et attendre',
            doSetLamp: 'Si lumière %m.outputs mise sur %n',
            doSetOutput: 'Si sortie %m.outputs mise sur %n',
            doResetCounter: 'Si compteur %m.counters réinitialisé',
            doSetMotorPower: 'Si moteur %m.motors mis sur %n',
            doSetMotorPowerDir: 'Si moteur %m.motors mis sur %n %m.motorDirections',
            doSetMotorDir: 'Si moteur %m.motors mis sur %m.motorDirections',
            doSetMotorPowerDirDist: 'Si moteur %m.motors ajusté aux étapes %n avec %n %m.motorDirections',
            doSetMotorPowerDirSync: 'Si moteur %m.motors ajusté avec %m.motors avec %n %m.motorDirections',
            doSetMotorPowerDirDistSync: 'Si moteur %m.motors ajusté avec %m.motors aux étapes %n avec %n %m.motorDirections',
            doStopMotor: 'Si moteur %m.motors stoppé',
            doConfigureInput: 'Si entrée %m.inputs mise sur %m.inputModes',
            dir_forward: 'vers l‘avant',
            dir_backwards: 'vers l‘arrière',
            sens_color: 'Capteur de couleur',
            sens_distance: 'Capteur de distance',
            sens_ntc: 'Résistance NTC',
            sens_photo: 'Résistance photo',
            sens_lightBarrier: 'Barrière lumineuse',
            sens_button: 'Interrupteur',
            sens_reed: 'Contact Reed',
            openclose_opens: 'ouvre',
            openclose_closes: 'ferme',
            mode_a5k: 'Résistance analogique',
            mode_d5k: 'Résistance numérique',
            mode_a10v: 'Tension analogique',
            mode_d10v: 'Tension numérique',
            mode_d10vg: 'Digital voltage greater',
            mode_d10vs: 'Digital voltage smaller or equal',
            mode_a5g: 'Digital resistance greater',
            mode_d10v: 'Digital resistance smaller or equal',
            mode_ultrasonic: 'Ultrason',
            reset: 'réinitialiser'
        },
       
        nl: {
            onOpenClose: 'Wanneer %m.openCloseSensors %m.inputs %m.openClose',
            onCounter: 'Wanneer teller %m.counters %m.compares %n',
            onInput: 'Wanneer waarde van %m.inputSensors %m.inputs %m.compares %n',
            isClosed: '%m.openCloseSensors %m.inputs gesloten?',
            getCounter: 'Lees waarde van teller %m.counters',
            getSensor: 'Lees waarde van %m.inputSensors %m.inputs',
            doPlaySound: 'Geluid %n afspelen',
            doPlaySoundWait: 'Geluid %n afspelen en wachten',
            doSetLamp: 'Stel lamp %m.outputs in op %n',
            doSetOutput: 'Stel uitgang %m.outputs in op %n',
            doResetCounter: 'Reset teller %m.counters',
            doSetMotorPower: 'Stel motor %m.motors in op %n',
            doSetMotorPowerDir: 'Stel motor %m.motors in op %n %m.motorDirections',
            doSetMotorDir: 'Stel motor %m.motors in op %m.motorDirections',
            doSetMotorPowerDirDist: 'Verplaats motor %m.motors met behulp van %n %m.motorDirections in %n stappen',
            doSetMotorPowerDirSync: 'Verplaats motor %m.motors met %m.motors met behulp van %n %m.motorDirections',
            doSetMotorPowerDirDistSync: 'Verplaats motor %m.motors met %m.motors met behulp van %n %m.motorDirections in %n stappen',
            doStopMotor: 'Stop motor %m.motors',
            doConfigureInput: 'Stel ingang %m.inputs in op %m.inputModes',
            dir_reverse: 'reverse',
            dir_non: 'non',
            dir_forward: 'vooruit',
            dir_backwards: 'achteruit',
            sens_color: 'kleurensensor',
            sens_distance: 'afstandssensor',
            sens_ntc: 'NTC-weerstand',
            sens_photo: 'fotoweerstand',
            sens_lightBarrier: 'fotocel',
            sens_button: 'schakelaar',
            sens_reed: 'Reed-contact',
            openclose_opens: 'opent',
            openclose_closes: 'sluit',
            mode_a5k: 'weerstand analoog',
            mode_d5k: 'weerstand digitaal',
            mode_a10v: 'spanning analoog',
            mode_d10v: 'spanning digitaal',
            mode_d10vg: 'Digital voltage greater',
            mode_d10vs: 'Digital voltage smaller or equal',
            mode_a5g: 'Digital resistance greater',
            mode_d10v: 'Digital resistance smaller or equal',
            mode_ultrasonic: 'ultrasoon',
            reset: 'resetten'
        },

    */

    },

    // get a translated version for the given constant
    get: function (what) {
        var codes = this.trans[this.langCode];		// requested language
        if (!codes) { codes = this.trans['en']; }	// fallback 1
        if (!codes) { codes = 'search error'; }	// fallback 2
        return codes[what];
    },

    getSensor: function (name) {
        return this.get('sens_' + name);
    },

    getMotorDir: function (dir) {
        return this.get('dir_' + dir);
    },

    getOpenClose: function (dir) {
        return this.get('openclose_' + dir);
    },

    getMode: function (mode) {
        return this.get('mode_' + mode);
    }

};

function ScratchConnection(url, ext) {
    var ws = null;
    // for access within methods
    var _this = this;
    var connected = false;
    var curDev = null;
    var inputEvent = new Event("Input");

    this.status = { status: 1, msg: 'Connecting' };

    // get the current time as string
    var getTimeString = function () {
        var d = new Date();
        var h = d.getHours(); h = (h < 10) ? ('0' + h) : h;
        var m = d.getMinutes(); m = (m < 10) ? ('0' + m) : m;
        var s = d.getSeconds(); s = (s < 10) ? ('0' + s) : s;
        return '(' + h + ':' + m + ':' + s + ') ';
    };

    /** Create a websocket connection with the CvLFTScratchB server, return true if ok */
    this.connect = function () {
        if (ws !== null) {
            alert('Connection with server is already alife'); return true;
        }
        ws = new WebSocket(url);
        if (ws === null) {
            alert('Your Browser does not support WebSockets. You need a recent Browser to use CvLFTScratchBt server');
            _this.connected = false;
            return false;
        }
        ws.onmessage = handleOnMessage;
        ws.onclose = handleClose;
        ws.onopen = handleOnOpen;
        ws.onerror = handleOnError;
        return true;
    };

    this.close = function () {
        ws.close();
        ws.onmessage = null;//2017-11-02
        ws.onclose = null;//2017-11-02
        ws.onopen = null;//2017-11-02
        ws.onerror = null;//2017-11-02
        ws = null;//2017-11-02
    };

    handleOnError = function (error) {
        console.log('Error detected: ');
        //ws.error;
    }
    // websocket connected. this == the websocket
    var handleOnOpen = function (event) {
        console.log('onopen message received: ');
        ext.onConnect();
        _this.connected = true;
    };

    // new websocket message. this == the websocket
    var handleOnMessage = function (message) {

        var messageType = message.data.substring(0, 3);
        var messageId = message.data.substring(3, 3);
        var messageData = message.data.substring(6);
        var data = messageData ? JSON.parse(messageData) : null;

        if (messageType === "SEV") {
            //{"inputId":0,"inputValueNew":1}
            var index = data.inputId;
            var value = data.inputValueNew;
            ext.input.setValue(index, value);
            // if (index === 0) { console.log("SEV index= " + index + " old :" + ext.input.oldValues.inputs[index] + "  new : " + ext.input.curValues.inputs[index]); }
            //ext.onNewInputs();

        } else if (messageType === "ACI") {
            //ext.input.oldValues = ext.input.curValues;
            //ext.input.curValues = data;
            console.log("ACI index= " + index + " old :" + ext.input.oldValues.inputs[index] + "  new : " + ext.input.curValues.inputs[index]);
            // ext.onNewInputs();
        } else if (messageType === "SEN") {
            //received all input values
            ext.input.oldValues = ext.input.curValues;
            ext.input.curValues = data;
            //ext.onNewInputs();
        } else if (messageType === "SDO") {
            //ext.onSoundDone();
        } else if (messageType === "PON") {
            //ext.onPong();
            //
            var dev = data[0];
            var devChanged = dev !== _this.curDev; //check if the name of the connection is still the same
            _this.curDev = dev;
            if (dev) {
                if (devChanged) {
                    ext.onConnectBtSmart();
                }
                _this.status = { status: 2, msg: getTimeString() + ' connected to ' + dev };
            } else {
                _this.status = { status: 1, msg: getTimeString() + ' connected to application but not to BT-Smart' };
            }

        }

    };

    /** websocket closed. this == the websocket */
    var handleClose = function () {
        _this.status = { status: 0, msg: getTimeString() + ' lost connection to CvLFTScratchBt.exe' };
        if (_this.connected) {
            alert('Lost connection to the BT-Smart-Application. Please ensure CvLFTScratchBt.exe is running and reload the Website');
        } else {
            alert('Could not connect to the BT-Smart-Application. Please ensure CvLFTScratchBt.exe is running and reload the Website');
        }
        this.close();//2017-11-02
        _this.connected = false;
    };

    this.playSound = function (sndIdx) {
        var s = this.send("PLY", { idx: sndIdx });
    };


    this.ping = function () {
        // ws.send("PIN" + this.CreateGuid());
        var s = this.send("PIN");

    };

    this.reset = function () {
        var s = this.send("RST");
    };

    /** send command (3 char)=cmd and json=obj and return if succesful the unique commend identifier=cmdId otherwise undifined*/
    this.send = function (cmd, obj) {
        if (ws.readyState !== WebSocket.OPEN) return;

        // var s = cmd + this.CreateGuid()+ JSON.stringify(obj);
        var cmdId = this.CreateGuid();
        if (undefined === obj) { ws.send(cmd + cmdId); }
        else {
            var js = JSON.stringify(obj);
            ws.send(cmd + cmdId + JSON.stringify(obj));
        }
        return cmdId;

    };
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }
    this.CreateGuid = function () {
        var final = "";
        var ids = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        //Random random = new Random();
        // Loop and get a random index in the ids and append to id 
        for (var i = 0; i < 3; i++) {
            final += ids[getRandomIntInclusive(0, ids.length - 1)];
        }
        return final;
    }
}


//IIFE Immediately Invoked Function Expression pattern
// function is treated as en expression and run immediately
// 

(function (ext) {

    // the current sensor values from the device
    ext.currentValues = null;

    // the previous values from the device (for change detection)
    ext.oldValues = null;

    // Cleanup function when the extension is unloaded
    ext._shutdown = function () {
        connection.close();
        //stop motors
        //reset inputs
    };

    ext._deviceConnected = function (dev) {
        //potentialDevices.push(dev);
        //if (!device) {
        //    tryNextDevice();
        //}
        console.log("ext._deviceConnected:");

    };
    /**    */
    ext._deviceRemoved = function (dev) {
        //if (device != dev) return;
        //if (poller) poller = clearInterval(poller);
        //device = null;
        console.log("ext._deviceRemoved:");
    };
    /** react to ScratchX stop button/event */

    ext._stop = function () {
        ext.reset();
    };


    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function () {
        try {
            connection.ping();
        } catch (err) {
            // not yet connected. no problem
        }
        return connection.status;
    };

    // reset the device
    ext.reset = function () {
        connection.reset();
        ext.output.currentValues.init();
        ext.input.initInputs();
    };


    // describes one motor (speed, direction, distance, sync)

    function Motor() {
        this.mod = false;		// motor was changed?
        this.speed = 0;
        this.dir = 0;			// -1 (back), 0 (stop), 1 (forward),
        this.modified = function () { this.mod = true; };
        this.setPower = function (newPower) {
            var changed = true;//this.speed !==this.speed = newPower      ;
            this.speed = newPower;
            if (changed) { this.mod = true; }
            //console.log(this.mode + ":" + newMode + ":" + changed + " - " + this.mod);
        };
        this.setDir = function (newDir) {
            var changed = true;//this.speed !==this.speed = newPower      ;
            this.dir = newDir;
            if (changed) { this.mod = true; }
            //console.log(this.mode + ":" + newMode + ":" + changed + " - " + this.mod);
        };
        this.transmitted = function () {
            this.mod = false;
        };
        this.init = function () {
            this.speed = 0; this.dir = 0; this.mod = true;
        };
    }

    // describes one input-configuration (mode)
    function Input() {
        this.mod = false;		// input was changed?
        this.mode = -1;			// start with "unknown"
        this.setMode = function (newMode) {
            var changed = true;//this.mode !== newMode;
            this.mode = newMode;
            if (changed) { this.mod = true; }
            //console.log(this.mode + ":" + newMode + ":" + changed + " - " + this.mod);
        };
        //2017-11-10 cvl add limt for BT Smart
        this.limit = 100;//start with undifined
        this.setLimit = function (newLimit) {
            var changed = true;//this.limit !== newLimit;
            this.limit = newLimit;
            if (changed) { this.mod = true; }
            //console.log(this.mode + ":" + newMode + ":" + changed + " - " + this.mod);
        };
        this.transmitted = function () { this.mod = false; };
        this.init = function () { this.setMode(0); this.setLimit(0); };
    }

    // describes one counter-configuration
    function Counter() {
        throw "Not applicable exception: Counter";

        //this.mod = false;
        //this.rst = false;
        //this.doReset = function () { this.rst = true; this.mod = true; };
        //this.transmitted = function () { this.mod = false; };
        //this.init = function () { this.rst = false; };
    }

    Motor.prototype.toString = function motorToString() {
        return "speed: " + this.speed + " dir: " + this.dir;// + " sync:" + this.syncWith + " dist:" + this.distance;
    };

    // describes the current state


    ext.output = {
        dirty: {
            limit: [false, false, false, false],
            dir: [false, false, false, false],
            power: [false, false],
        },
        oldValues: {
            motors: [new Motor(), new Motor()],
            inputs: [new Input(), new Input(), new Input(), new Input()],
        },
        currentValues: {
            // outgoing state
            motors: [new Motor(), new Motor()],
            inputs: [new Input(), new Input(), new Input(), new Input()],
            // mark the outgoing state as "transmitted"
            transmitted: function () {
                var i;
                for (i = 0; i < 2; ++i) { this.motors[i].transmitted(); }
                for (i = 0; i < 4; ++i) { this.inputs[i].transmitted(); }
            },
            needsUpdate: function () {
                var needsUpdate = false; var i;
                for (i = 0; i < 2; ++i) { needsUpdate |= this.motors[i].mod; }
                for (i = 0; i < 4; ++i) { needsUpdate |= this.inputs[i].mod; }
                return needsUpdate;
            },
            // reset to initial state
            init: function () {
                var i;
                for (i = 0; i < 2; ++i) { this.motors[i].init(); }
                for (i = 0; i < 4; ++i) { this.inputs[i].init(); }
            }
        },
        transmitted: function () {
            var i;
            for (i = 0; i < 2; ++i) {
                if (this.currentValues.motors[i].mod) {
                    // this.oldValues.motors[i].speed = this.currentValues.motors[i].speed;
                    // this.oldValues.motors[i].dir = this.currentValues.motors[i].dir;
                };
            };
            for (i = 0; i < 4; ++i) {
                if (this.currentValues.inputs[i].mod) {
                    // this.oldValues.inputs[i].limit = this.currentValues.inputs[i].limit;
                    // this.oldValues.inputs[i].mode = this.currentValues.inputs[i].mode;
                };
            };
            this.currentValues.transmitted();
        },
        setLimit: function (idx, newLimit) {
            this.oldValues.inputs[idx].limit = this.currentValues.inputs[idx].limit;
            this.currentValues.inputs[idx].setLimit(newLimit);
            if(this.oldValues.inputs[idx].limit !== this.currentValues.inputs[idx].limit) this.dirty.limit[idx] = true;
        },

        setPower: function (idx, newPower) {
            this.oldValues.motors[idx].speed = this.currentValues.motors[idx].speed;
            this.currentValues.motors[idx].setPower(newPower);
            if (this.oldValues.motors[idx].speed !== this.currentValues.motors[idx].speed) this.dirty.power[idx] = true;
        },
        setDir: function (idx, newDir) {
            this.oldValues.motors[idx].dir = this.currentValues.motors[idx].dir;
            this.currentValues.motors[idx].setDir(newDir);
            if (this.oldValues.motors[idx].dir !== this.currentValues.motors[idx].dir) this.dirty.dir[idx] = true;

        },
        isDirForward: function (idx) {
            return this.currentValues.motors[idx].dir === 1 || this.currentValues.motors[idx].dir === 2;
        },
        isDirBackward: function (idx) {
            return this.currentValues.motors[idx].dir === -1 || this.currentValues.motors[idx].dir === -2;
        },
        isDirStop: function (idx) {
            return this.currentValues.motors[idx].dir === 0;
        },
        isNewDir: function (idx) {
            if (this.dirty.dir[idx]) { this.dirty.dir[idx] = false; return true; } else { return false; }
        },
        isNewLimit: function (idx) {
            if (this.dirty.limit[idx]) { this.dirty.limit[idx] = false; return true; } else { return false; }
        },
        isNewPower: function (idx) {
            if (this.dirty.power[idx]) { this.dirty.power[idx] = false; return true; } else { return false; }
        },
    };
    // received state
    ext.input = {
        curValues: {},
        oldValues: {},
        initInputs: function () {
            this.curValues.inputs = [0, 0, 0, 0];
            this.oldValues.inputs = [0, 0, 0, 0];
        },
        setValue: function (index, value) {
            this.oldValues.inputs[index] = this.curValues.inputs[index];
            this.curValues.inputs[index] = value;
        },
        isRising: function (index) { return ext.input.oldValues.inputs[index] === 0 && ext.input.curValues.inputs[index] === 1; },
        isFalling: function (index) { return ext.input.oldValues.inputs[index] === 1 && ext.input.curValues.inputs[index] === 0; },
        initInput: function (index) {
            this.curValues.inputs[index] = 0; this.oldValues.inputs[index] = 0;
        }
    };

    // convert Output name to array index: '04' -> 3
    ext._outputNameToIdx = function (outputName) {
        return outputName[1] - 1;
    };

    // convert Input name to array index: 'I4' -> 3
    ext._inputNameToIdx = function (inputName) {
        return inputName[1] - 1;
    };

    // convert Motor name to array index: 'M2' -> 1
    ext._motorNameToIdx = function (motorName) {
        return motorName[1] - 1;
    };

    // convert counter-name to array index: 'C4' -> 3
    ext._counterNameToIdx = function (counterName) {
        return counterName[1] - 1;
    };

    // convert direction-name to value 'backward' -> -100
    ext._dirNameToValue = function (dirName) {
        if (dirName === Lang.getMotorDir('forward')) { return +1; }
        if (dirName === Lang.getMotorDir('backward')) { return -1; }
        if (dirName === Lang.getMotorDir('reverse')) { return 100; }
        if (dirName === Lang.getMotorDir('non')) { return 0; }
    };

    // convert input-mode to value 'd10v' -> 0
    ext._inputModeToIdx = function (inputMode) {

        var dig = descriptor.menus.inputModes;

        var modeIdx = descriptor.menus.inputModes.indexOf(inputMode);
        if (modeIdx >= 0) return modeIdx;
        console.log("ext._inputModeToIdx: error, out of range");
    };


    // set the given Output 'Ox' to the provided value [0:8];
    ext._setOutput08 = function (outputName, value) {
        var idx = ext._outputNameToIdx(outputName);
        var val = Math.abs(value) * 100 / 8;					// [0:8] -> [0:100];
        ext.output.currentValues.outputs[idx].val = Math.round(val);	// ensure integer
        ext.output.currentValues.outputs[idx].modified();
        //alert("set output " + val);
    };

    // set the given Motor 'Mx' speed [0:8]
    ext._SetMotorPower08 = function (motorName, speed) {
        var idx = ext._motorNameToIdx(motorName);
        if (speed > 8 || speed < 0) { alert("speed needs to be betweem 0..8 but it is+"); }
        var speedL = Math.abs(speed) <= 8 ? Math.abs(speed) : 0;
        var val = speedL * 100 / 8;						// [0:8] -> [0:100];
        ext.output.setPower(idx, Math.round(val));	// ensure integer
        // ext.output.currentValues.motors[idx].modified();
        //  ext.output.currentValues.motors[idx].speed = Math.round(val);	// ensure integer
        //  ext.output.currentValues.motors[idx].modified();
    };


    // set the given Motor 'motorName' direction als name
    ext._setMotorDir = function (motorName, dirName) {
        ext._setMotorDirVal(motorName, ext._dirNameToValue(dirName));
    };
    // set the given Motor 'motorName' direction as number
    ext._setMotorDirVal = function (motorName, dirv) {
        var idx = ext._motorNameToIdx(motorName);
        switch (dirv) {
            case -1:
            case 0:
            case 1: ext.output.setDir(idx, dirv); break;
            case 100:
                if (ext.output.currentValues.motors[idx].dir < 0) { ext.output.setDir(idx, 2); }
                else
                    if (ext.output.currentValues.motors[idx].dir > 0) { ext.output.setDir(idx, -2); }
                break;
        }
        //    ext.output.currentValues.motors[idx].modified();
    };

    // set the given Motor 'Mx' number of steps
    ext._setMotorDist = function (motorName, steps) {
        throw "Not applicable exception: _setMotorDist";

        //var idx = ext._motorNameToIdx(motorName);
        //ext.output.currentValues.motors[idx].dist = steps;
        //ext.output.currentValues.motors[idx].modified();
    };

    // let motor2 run in sync with motor1
    ext._setMotorSync = function (motor1Name, motor2Name) {
        throw "Not applicable exception: _setMotorSync";

        //    var idx1 = ext._motorNameToIdx(motor1Name);
        //    var idx2 = ext._motorNameToIdx(motor2Name);
        //    ext.output.motors[idx1].sync = idx2;
        //    ext.output.motors[idx1].modified();
    };

    // let the given motor run unsynced
    ext._setMotorSyncNone = function (motorName) {
        throw "Not applicable exception: onSoundDone";
        //var idx = ext._motorNameToIdx(motorName);
        //ext.output.motors[idx].sync = -1;
        //ext.output.motors[idx].modified();
    };

    // set the given Input's mode:  
    // 0=DIGITAL_10V (same as _Greater=5),
    //1=DIGITAL_5KOHM (same as _Greater=7),<br/>
    // 2=ANALOG_10V, 3=ANALOG_5KOHM,<br/>
    // 5=DIGITAL_10V_Greater ,6=DIGITAL_10V_SmallerOrEqual,<br/>
    // 7=DIGITAL_5KOHM_Greater, 8=DIGITAL_5KOHM_SmallerOrEqual</param>
    ext._setSensorMode = function (inputName, mode, limit) {
        limit = (typeof limit !== 'undefined') ? limit : 1500;
        var idx = ext._inputNameToIdx(inputName);
        ext.output.currentValues.inputs[idx].setMode(mode); ext.output.setLimit(idx,limit);
        //console.log("set input " + inputName + " to " + mode);
    };



    // set the given input's mode according to the given type
    ext._adjustInputModeAnalog = function (inputName, sensorType) {
        //console.log("configuring " + inputName + " for analog " + sensorType);
        //if (sensorType === Lang.getSensor('color')) { ext._setSensorMode(inputName, 2); }		// ANALOG_10V
        //    //        else if (sensorType === Lang.getSensor('distance')) { ext._setSensorMode(inputName, 4); }		// ultrasonic
        //else if (sensorType === Lang.getSensor('ntc')) { ext._setSensorMode(inputName, 3); }		// ANALOG_5K
        //else if (sensorType === Lang.getSensor('photo')) { ext._setSensorMode(inputName, 3); }		// ANALOG_5K
        //else { alert("unsupported sensor type"); }
    };

    // set the given input's mode according to the given type
    ext._adjustInputModeDigital = function (inputName, sensorType) {
        //console.log("configuring " + inputName + " for digital " + sensorType);
        //if (sensorType === Lang.getSensor('button')) { ext._setSensorMode(inputName, 1); }		// DIGITAL_5KOHM
        //else if (sensorType === Lang.getSensor('reed')) { ext._setSensorMode(inputName, 1); }		// DIGITAL_5KOHM
        //else if (sensorType === Lang.getSensor('lightBarrier')) { ext._setSensorMode(inputName, 1); }		// DIGITAL_5KOHM
        //else { alert("unsupported sensor type"); }
    };


    //was ACTU
    ext.updateIfNeeded = function () {
        if (ext.output.currentValues.needsUpdate()) {
            var cmdId = connection.send("ACT", ext.output.currentValues);
            ext.output.transmitted();

        }
    };

    ext.waitForMotor = [];

    /** input values have changed */
    //ext.onNewInputs = function () {
    //    //ext.checkCallbacks();
    //};

    /** ping/pong between scratch and app */
    //ext.onPong = function () {
    //   // ext.checkCallbacks();
    //};

    /** check callbacks for some blocks whether they are hit */
    ext.checkCallbacks = function () {
        for (var idx in ext.waitForMotor) {
            var func = ext.waitForMotor[idx];
            var res = func();
            if (res) {
                //console.log("remove");
                ext.waitForMotor.splice(idx, 1);// remove 1 item at 2-index position 
            }
        }
    };

    /** commands */


    /** set the lamp at the given output to the provided value [0:8] */
    ext.doSetLamp = function (outputName, value) {
        ext._setOutput08(outputName, value);
        ext.updateIfNeeded();
    };

    /** set the given Output 'Ox' to the provided value [0:8] */
    ext.doSetOutput = function (outputName, value) {
        //  ext._setOutput08(outputName, value);
        //  ext.updateIfNeeded();
    };


    /** adjust the given motor's speed */
    ext.doSetMotorPower = function (motorName, value) {
        ext._SetMotorPower08(motorName, value);
        ext.updateIfNeeded();
    };

    /** adjust the given motor's direction */
    ext.doSetMotorDir = function (motorName, dirName) {
        ext._setMotorDir(motorName, dirName);
        ext.updateIfNeeded();
    };


    /** adjust the given motor's power and direction */
    ext.doSetMotorPowerDir = function (motorName, power, dirName) {
        ext._setMotorDir(motorName, dirName);
        ext._SetMotorPower08(motorName, power);
        ext.updateIfNeeded();
    };




    /** stop the given motor but don't change the power */
    ext.doStopMotor = function (motorName) {
        // ext._SetMotorPower08(motorName, 0);		// set speed to 0
        ext._setMotorDirVal(motorName, 0);		// remove distance limits
        ext.updateIfNeeded();
    };

    /** stop the given motor but don't change the power */
    ext.doStopMotorAll = function () {
        // ext._SetMotorPower08(motorName, 0);		// set speed to 0
        ext._setMotorDirVal('M1', 0);
        ext._setMotorDirVal('M2', 0);
        ext.updateIfNeeded();
    };


    ext.doConfigureInput = function (inputName, inputMode) {
        ext.doConfigureInputLimit(inputName, inputMode, 120);
    };

    //* moet een wait worden op bevestiging van aanpassing  /
    ext.doConfigureInputLimit = function (inputName, inputMode, inputLimit) {
        var idx = ext._inputModeToIdx(inputMode);
        ext._setSensorMode(inputName, idx, inputLimit);
        //reset deze input
        ext.updateIfNeeded();
        // window.setTimeout(function () { var t = 'jjj'; }, 30);
    };


    /** get the current value for the given sensor-type connected to the provided input */
    ext.getSensor = function (sensorType, inputName) {
        ext.updateIfNeeded();
        var idx = ext._inputNameToIdx(inputName);
        return ext.input.curValues.inputs[idx];
    };
    /** get the current value for the given  sensor, result is numeral, 0..65535 [mV]/[Ohm]) or 0..1 (binary). */
    ext.getSensorX = function (inputName) {
        var idx = ext._inputNameToIdx(inputName);
        return ext.input.curValues.inputs[idx];
    };
    /** get the current value for the given analogue sensor-type, result is numeral */
    ext.getSensorA = function (inputName) {
        var idx = ext._inputNameToIdx(inputName);
        var modeIdx = ext.output.currentValues.inputs[idx].mode;
        var mode = descriptor.menus.inputModes[modeIdx]; var dig = descriptor.menus.inputModesA;
        if (!dig.includes(mode)) { alert('onRisingEdge: Works only in analogue sensor modes'); return false; }
        return ext.input.curValues.inputs[idx];
    };
    /** get the current value for the a binary sensor-type, result is true or false (boolean) */
    ext.getSensorB = function (inputName) {
        var idx = ext._inputNameToIdx(inputName);
        var modeIdx = ext.output.currentValues.inputs[idx].mode;
        var mode = descriptor.menus.inputModes[modeIdx];
        var dig = descriptor.menus.inputModesB;
        if (!dig.includes(mode)) { alert('onRisingEdge: Works only in binary sensor modes'); return false; }
        return ext.input.curValues.inputs[idx] === 0 ? false : true;
    };
    /** get the current power for the given motor connected  */
    ext.getInputInfoText = function (inputName) {
        //todo, index to text for mode
        var idx = ext._inputNameToIdx(inputName);
        return 'Input ' + inputName + ' mode = ' + ext.output.currentValues.inputs[idx].mode + ', limit = ' + ext.output.currentValues.inputs[idx].limit
        + ', value =' + ext.input.curValues.inputs[idx];
    };

    /** get the current power for the given motor connected  */
    ext.getMotorPower = function (motorName) {
        ext.updateIfNeeded();
        var idx = ext._motorNameToIdx(motorName);
        return Math.round(ext.output.currentValues.motors[idx].speed / 100 * 8);
    };
    /** get the current power for the given motor connected  */
    ext.getMotorSpeed = function (motorName) {
        ext.updateIfNeeded();
        var idx = ext._motorNameToIdx(motorName);
        return Math.round(ext.output.currentValues.motors[idx].speed / 100 * 8 * ext.output.currentValues.motors[idx].dir);
    };
    /** get the current power for the given motor connected  */
    ext.getMotorDir = function (motorName) {
        ext.updateIfNeeded();
        var idx = ext._motorNameToIdx(motorName);
        return ext.output.currentValues.motors[idx].dir;
    };


    /** get the current power for the given motor connected  */
    ext.getMotorInfoText = function (motorName) {
        //todo, index to text for direction
        var idx = ext._motorNameToIdx(motorName);
        return 'Motor ' + motorName + ' power = ' + ext.output.currentValues.motors[idx].speed + ' direction = ' + ext.output.currentValues.motors[idx].dir;
    };

    /** button/lightBarrier/reed is closed */
    ext.isClosed = function (sensorType, inputName) {

        // ensure inputName uses the correct configuration
        ext._adjustInputModeDigital(inputName, sensorType);
        ext.updateIfNeeded();

        // fetch
        var idx = ext._inputNameToIdx(inputName);
        return ext.input.curValues.inputs[idx] === 1;		// TODO light barrier?

    };


    /** sensor X on input 'Ix' >,<,= value */
    ext.onInput = function (sensorType, inputName, operator, value) {
        throw "Not applicable exception: doSetMotorPowerDirDistSync";
        //// ensure correct working mode
        //ext._adjustInputModeAnalog(inputName, sensorType);
        //ext.updateIfNeeded();

        //// get index
        //var idx = ext._inputNameToIdx(inputName);

        //// compare
        //if (operator === '>') {
        //    return !(ext.input.oldValues.inputs[idx] > value) && (ext.input.curValues.inputs[idx] > value);
        //} else if (operator === '<') {
        //    return !(ext.input.oldValues.inputs[idx] < value) && (ext.input.curValues.inputs[idx] < value);
        //} else if (operator === '=') {
        //    return !(ext.input.oldValues.inputs[idx] === value) && (ext.input.curValues.inputs[idx] === value);
        //} else if (operator === '<=') {
        //    return !(ext.input.oldValues.inputs[idx] <= value) && (ext.input.curValues.inputs[idx] <= value);
        //}
        return false;
    };
//HAT-blocks notification
    /** On Rising Edge of an Input in the binary mode */
    ext.onRisingEdge = function (inputName) {
        var idx = ext._inputNameToIdx(inputName);
        var modeIdx = ext.output.currentValues.inputs[idx].mode;
        var mode = descriptor.menus.inputModes[modeIdx];
        var dig = descriptor.menus.inputModesB;
        if (!dig.includes(mode)) { console.log('onRisingEdge: Works only in binary sensor modes'); return false; }
        var test = ext.input.isRising(idx);
        //   if(test) {
        //       console.log("Risling index= " + idx) ;
        //   }
        return test;
    };
    /** On Faling Edge of an Input in the binary mode */
    ext.onFallingEdge = function (inputName) {
        var idx = ext._inputNameToIdx(inputName);
        var modeIdx = ext.output.currentValues.inputs[idx].mode;
        var mode = descriptor.menus.inputModes[modeIdx];
        var dig = descriptor.menus.inputModesB;
        if (!dig.includes(mode)) { console.log('onFallingEdge: Works only in binary sensor modes'); return false; }
        var test = ext.input.isFalling(idx);
        //   if(test) {
        //       console.log("Falling index= " + idx) ;
        //    }
        return test;
    };
    /** On Motor direction change to Forward*/
    ext.onMotorDirectionForward = function (motorName) {
        var idx = ext._motorNameToIdx(motorName);
        var dir = ext.output.currentValues.motors[idx].dir;
        var test = ext.output.isDirForward(idx);
        //   if(test) {
        //       console.log("Falling index= " + idx) ;
        //    }
        return test;
    };
    /** On Motor direction change to Backward*/
    ext.onMotorDirectionBackward = function (motorName) {
        var idx = ext._motorNameToIdx(motorName);
        var dir = ext.output.currentValues.motors[idx].dir;
        var test = ext.output.isDirBackward(idx);
        //   if(test) {
        //       console.log("Falling index= " + idx) ;
        //    }
        return test;
    };
    /** On output (Motor) direction change to Stop*/
    ext.onMotorDirectionStop = function (motorName) {
        var idx = ext._motorNameToIdx(motorName);
        var dir = ext.output.currentValues.motors[idx].dir;
        var test = ext.output.isDirStop(idx);
        //   if(test) {
        //       console.log("Falling index= " + idx) ;
        //    }
        return test;
    };
    /** On Input limit change */
    ext.onInputLimitChange = function (inputName) {
        var idx = ext._inputNameToIdx(inputName);
       // var limit = ext.output.currentValues.inputs[idx].limit;
        var test = ext.output.isNewLimit(idx);
        //idee test op verandering en reset dirty
        //   if(test) {
        //       console.log("Falling index= " + idx) ;
        //    }
        return test;
    };
    /** On output power change */
    ext.onOuputPowerChange = function (motorName) {
        var idx = ext._motorNameToIdx(motorName);
       // var limit = ext.output.currentValues.inputs[idx].limit;
        var test = ext.output.isNewPower(idx);
        //idee test op verandering en reset dirty
        //   if(test) {
        //       console.log("Falling index= " + idx) ;
        //    }
        return test;
    };
    /** On Motor direction change */
    ext.onMotorDirectionChange = function (motorName) {
        var idx = ext._motorNameToIdx(motorName);
        var dir = ext.output.currentValues.motors[idx].dir;
        var test = ext.output.isDirForward(idx);
        //   if(test) {
        //       console.log("Falling index= " + idx) ;
        //    }
        return test;
    };
    /**Notification when the connection has been made */
    ext.onConnected = function () {
        var test = false; //
        //   if(test) {
        //       console.log("Falling index= " + idx) ;
        //    }
        return test;
    };    /** Notification when the connection has been lost */
    ext.onDisConnected = function () {
        var test = false; //
        //   if(test) {
        //       console.log("Falling index= " + idx) ;
        //    }
        return test;
    };

    /** button/light-barrier/reed opens/closes */
    ext.onOpenClose = function (sensorType, inputName, direction) {
        throw "Not applicable exception: doSetMotorPowerDirDistSync";

        // TODO: if schalter/reed/lichtschranke all need DIGITAL_5KOHM and have the same direction effect
        // then there is no need to distinguish between those three sensor types!

        // ensure inputName uses the correct configuration
        //ext._setSensorMode(inputName, 1);		// DIGITAL_5KOHM
        ext._adjustInputModeDigital(inputName, sensorType);
        ext.updateIfNeeded();

        // check both directions
        var idx = ext._inputNameToIdx(inputName);
        if (direction === Lang.getOpenClose('opens')) {
            return ext.input.isFalling(idx);	// TODO light barrier?//ext.input.oldValues.inputs bestaan niet
        } else if (direction === Lang.getOpenClose('closes')) {
            return ext.input.isRising(idx);	// TODO light barrier?//ext.input.oldValues.inputs bestaan niet
        } else {
            alert('invalid open/close mode');
        }
    };

    /** counter 'Cx' >,<,= value */
    ext.onCounter = function (counterName, operator, value) {
        throw "Not applicable exception: doSetMotorPowerDirDistSync";

        //var idx = ext._counterNameToIdx(counterName);
        //if (operator === '>') {
        //    return !(ext.input.oldValues.counters[idx] > value) && (ext.input.curValues.counters[idx] > value);
        //} else if (operator === '<') {
        //    return !(ext.input.oldValues.counters[idx] < value) && (ext.input.curValues.counters[idx] < value);
        //} else if (operator === '=') {
        //    return !(ext.input.oldValues.counters[idx] === value) && (ext.input.curValues.counters[idx] === value);
        //} else {
        //    alert('invalid operator');
        //}
    };
    /** doConnect  */
    ext.doConnect = function () {
        // alert('not implemented xyet');
        connection.connect();
    };
    /** doConnect  */
    ext.doDisconnect = function () {
        // alert('not implemented yet');
        connection.close();
    };
    /** temp to test  */
    ext.test01 = function () {
        ext.input.setValue(0, ext.input.oldValues.inputs[0]);
    };

    // Block and block menu descriptions
    var descriptor = {

        blocks: [

            // events

            // connection

            [' ', Lang.get('doConnect'), 'doConnect'],
            [' ', Lang.get('doDisconnect'), 'doDisconnect'],
            // output
            [' ', Lang.get('doSetMotorPower'), 'doSetMotorPower', 'M1', 8],
            [' ', Lang.get('doSetMotorDir'), 'doSetMotorDir', 'M1', Lang.getMotorDir('forward')],
            [' ', Lang.get('doSetMotorPowerDir'), 'doSetMotorPowerDir', 'M1', 8, Lang.getMotorDir('forward')],
            [' ', Lang.get('doStopMotor'), 'doStopMotor', 'M1'],
            [' ', Lang.get('doStopMotorAll'), 'doStopMotorAll'],
            ['r', Lang.get('getMotorDir'), 'getMotorDir', 'M1'],
            ['r', Lang.get('getMotorPower'), 'getMotorPower', 'M1'],
            ['r', Lang.get('getMotorSpeed'), 'getMotorSpeed', 'M1'],
            ['r', Lang.get('getMotorInfoText'), 'getMotorInfoText', 'M1'],

           //input
            [' ', Lang.get('doConfigureInputA'), 'doConfigureInput', 'I1', Lang.getMode('a10v')],
            [' ', Lang.get('doConfigureInputD'), 'doConfigureInputLimit', 'I1', Lang.getMode('d10v'), 1500],
            [' ', Lang.get('doConfigureInput'), 'doConfigureInput', 'I1', Lang.getMode('d10v')],
            ['r', Lang.get('getSensorA'), 'getSensorA', 'I1'],
            ['b', Lang.get('getSensorB'), 'getSensorB', 'I1'],
            ['r', Lang.get('getSensorX'), 'getSensorX', 'I1'],
        //    ['r', Lang.get('getInputInfoText'), 'getInputInfoText', 'I1'],
       //    ['r', Lang.get('getBatteryPower'), 'getBatteryPower', 'I1'],
       //    ['r', Lang.get('IsBatteryPowerBelow'), 'IsBatteryPowerBelow', 8500],
       //    [' ', 'test01', 'test01'],
            [' ', Lang.get('reset'), 'reset'],
            //static events
            ['h', Lang.get('onRisingEdge'), 'onRisingEdge', 'I1'],
            ['h', Lang.get('onFallingEdge'), 'onFallingEdge', 'I1'],
            ['h', Lang.get('onMotorDirectionBackward'), 'onMotorDirectionBackward', 'M1'],
            ['h', Lang.get('onMotorDirectionForward'), 'onMotorDirectionForward', 'M1'],
            ['h', Lang.get('onMotorDirectionStop'), 'onMotorDirectionStop', 'M1'],
            ['h', Lang.get('onConnected'), 'onConnected'],
            ['h', Lang.get('onDisconnected'), 'onDisconnected'],
          //dynamic eevents
             ['h', Lang.get('onInputAnlogueValueChange'), 'onInputAnlogueValueChange', 'I1'],
             ['h', Lang.get('onInputLimitChange'), 'onInputLimitChange', 'I1'],
             ['h', Lang.get('onInputCfgChange'), 'onInputCfgChange', 'I1']
           //  ['h', Lang.get('onMotorDirectionChange'), 'onMotorDirectionChange', 'M1'],
 //            ['h', Lang.get('onOuputPowerChange'), 'onOuputPowerChange', 'M1'],
 //            ['h', Lang.get('onMotorDirectionChange'), 'onMotorDirectionChange', 'M1']
        ],

        menus: {
            compares: ['>', '<', '<='],
            inputSensors: [Lang.getSensor('color'),  Lang.getSensor('ntc'), Lang.getSensor('photo')],
            openCloseSensors: [Lang.getSensor('button'), Lang.getSensor('reed'), Lang.getSensor('lightBarrier')],
            openClose: [Lang.getOpenClose('opens'), Lang.getOpenClose('closes')],
            inputs: ['I1', 'I2', 'I3', 'I4'],
            motors: ['M1', 'M2'],
            motorDirections: [Lang.getMotorDir('forward'), Lang.getMotorDir('backward')],
            motorDirections2: [Lang.getMotorDir('forward'), Lang.getMotorDir('reverse'), Lang.getMotorDir('backward'), Lang.getMotorDir('non')],
            counters: [],
            outputs: ['O1', 'O2', 'O3', 'O4'],
            outputValues: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            edges: ['rising', 'falling'],
            inputModes: [Lang.getMode('d10v'), Lang.getMode('d5k'), Lang.getMode('a10v'), Lang.getMode('a5k'),
                         Lang.getMode('d10vg'), Lang.getMode('d10vs'), Lang.getMode('d5kg'), Lang.getMode('d5ks')],
            inputModesA: [Lang.getMode('a10v'), Lang.getMode('a5k')],
            inputModesB: [Lang.getMode('d10v'), Lang.getMode('d5k'),
                          Lang.getMode('d10vg'), Lang.getMode('d10vs'), Lang.getMode('d5kg'), Lang.getMode('d5ks')]
        },

        url: 'https://www.fischertechnik.de/en/products/playing/robotics/540586-robotics-bt-smart-beginner-set'

    };
    // 0=DIGITAL_10V (same as _Greater=4), 1=DIGITAL_5KOHM (same as _Greater=4),<br/>
    // 2=ANALOG_10V, 3=ANALOG_5KOHM,<br/>
    // 5=DIGITAL_10V_Greater ,6=DIGITAL_10V_SmallerOrEqual,<br/>
    // 7=DIGITAL_5KOHM_Greater, 8=DIGITAL_5KOHM_SmallerOrEqual</param>

    // connected to FTScratchTXT.exe
    ext.onConnect = function () {
        // ensure the ROBO LT is reset
        ext.reset();
    };

    // connected to a TXT
    ext.onConnectTXT = function () {
        // ensure the internal state is reset as the TXT's state is also reset!
        ext.output.currentValues.init();

    };
    // connected to a BT Smart controller
    ext.onConnectBtSmart = function () {
        // ensure the internal state is reset as the BT Smart's state is also reset!
        ext.output.currentValues.init();
        ext.updateIfNeeded();
    };
    //Runs after start up
    var connection = new ScratchConnection("ws://127.0.0.1:8003/api", ext);	// edge/ie need the IP here
    connection.connect();

    // Register the extension
    ScratchExtensions.register('fischertechnik Bt-Smart', descriptor, ext);

})({});

