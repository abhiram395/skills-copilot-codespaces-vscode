function skillsMember() {
  return {
    name: 'skillsMember',
    description: 'A member with skills',
    properties: {
      skills: {
        type: 'array',
        items: {
          type: 'string'
        },
        description: 'List of skills possessed by the member'
      }
    }
  };
}