const world = function () {

    const self = this;
    self.resetTheWorld = () => {
        console.log("inside resetTheWorld");
        self.sharedData = {
            result: {},
        }
    }
};
module.exports = world;