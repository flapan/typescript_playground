type ContactBirthDate = Date | number | string

type ContactStatus = "active" | "inactive" | "new"

interface Contact {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
}

interface Address {
    line1: string;
    line2: string;
    state: string;
    postalcode: string;
}

type AddressableContact = Contact & Address

let primaryContact: Contact = {
    birthDate: new Date("02-12-2018"),
    id: 4,
    name: "Hugo Schiller",
    status: "active"
};

type ContactFields = keyof Contact

function getValue<T, U extends keyof T>(source: T, propertyName: U) {
    return source[propertyName];
}


type ContactName = string;

function clone<T>(source: T): T {
    return Object.apply({}, source);
}

function cloneWithFuncParam(func: (source: Contact) => Contact): Contact {
    return
}

const a: Contact = { id: 123, name: "Homer Simpson"};
const b = clone(a);

const dateRange = { startDate: Date.now(), endDate: Date.now() };
const dateRangeCopy = clone(dateRange);

const d = getValue(a, "name");
console.log(d);