var primaryContact = {
    birthDate: new Date("02-12-2018"),
    id: 4,
    name: "Hugo Schiller",
    status: "active"
};
function getValue(source, propertyName) {
    return source[propertyName];
}
function clone(source) {
    return Object.apply({}, source);
}
function cloneWithFuncParam(func) {
    return;
}
var a = { id: 123, name: "Homer Simpson" };
var b = clone(a);
var dateRange = { startDate: Date.now(), endDate: Date.now() };
var dateRangeCopy = clone(dateRange);
var d = getValue(a, "name");
console.log(d);
