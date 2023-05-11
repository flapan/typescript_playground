type ContactBirthDate = Date | number | string

interface Contact {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
}

enum ContactStatus{
    Active = "active",
    Inactive = "inactive",
    New = "new"
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
    status: ContactStatus.Active
};

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