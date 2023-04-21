interface Contact extends Partial<Address>{
    id: number;
    name: ContactName;
    birthDate?: Date;
    status: ContactStatus;
    clone(): Contact
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

let primaryContact: Contact = {
    birthDate: new Date("20-12-2018"),
    id: 4,
    name: "Hugo Schiller",
    status: ContactStatus.Active
};

type ContactName = string;

function clone(source: Contact): Contact {
    return Object.apply({}, source);
}

function cloneWithFuncParam(func: (source: Contact) => Contact): Contact {
    return
}