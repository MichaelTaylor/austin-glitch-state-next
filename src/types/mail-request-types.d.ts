export interface MailchimpMember {
  email_address: string;
  merge_fields: {
    FNAME: string;
  };
  status: string;
}

export interface RequestBody {
  email: string;
  firstName: string;
}