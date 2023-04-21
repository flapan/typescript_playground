interface Contact extends Partial<Address>{
    id: number;
    name: ContactName;
    birthDate?: Date;
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
    name: "Hugo Schiller"
};

type ContactName = string;