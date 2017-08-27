const MixinLog = {

    componentWillMount(){
        console.log('混合组建即将加载')
    },

    log() {
        console.log("Mixin测试")
    }
}

export default MixinLog;