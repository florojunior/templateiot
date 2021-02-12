export default class Tracker {
    constructor(dsPlate, dsCountry, dsRegion) {
        this.dsCountry = dsCountry;
        this.dsRegion = dsRegion;
        this.dsPlate = dsPlate;
        this.id = "1",
        this.idUsernameCreated = "L4D_ADMIN",
        this.idUsernameChanged = "L4D_ADMIN",
        this.flLocked = "0",
        this.tsCreated =  `/Date(${Date.now()})/`;
        this.tsChanged =  `/Date(${Date.now()})/`;
    }
}