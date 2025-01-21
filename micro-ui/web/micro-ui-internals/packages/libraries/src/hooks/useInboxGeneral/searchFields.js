const inboxSearchFields = {
  PT: [
    {
      label: "PT_PROPERTY_APPLICATION_NO",
      name: "acknowledgementIds",
      roles: [],
    },
    {
      label: "ES_SEARCH_UNIQUE_PROPERTY_ID",
      name: "propertyIds",
      // minLength: "10",
      roles: [],
    },
    {
      label: "ES_SEARCH_APPLICATION_MOBILE_NO",
      name: "mobileNumber",
      type: "mobileNumber",
      maxLength: 8,
      minLength: 0,
      roles: [],
      pattern: "^$|^77[0-9]{6}$",
      errorMessages: {
        pattern: "",
        minLength: "",
        maxLength: "",
      },
    },
  ],
};

const searchFieldsForSearch = {
  PT: [
    {
      label: "ES_INBOX_LOCALITY",
      name: "locality",
      type: "Locality",
      isMendatory: true,
    },
    {
      label: "ES_INBOX_UNIQUE_PROPERTY_ID",
      name: "propertyIds",
      roles: [],
    },
    {
      label: "ES_SEARCH_EXISTING_PROPERTY_ID",
      name: "oldpropertyids",
      title: "ES_SEARCH_APPLICATION_MOBILE_INVALID",
      roles: [],
    },
    {
      label: "ES_SEARCH_APPLICATION_MOBILE_NO",
      name: "mobileNumber",
      type: "mobileNumber",
      maxLength: 8,
      minLength: 0,
      roles: [],
      pattern: "^$|^77[0-9]{6}$",
      errorMessages: {
        pattern: "",
        minLength: "",
        maxLength: "",
      },
    },
  ],
};

export const getSearchFields = (isInbox) => (isInbox ? inboxSearchFields : searchFieldsForSearch);
