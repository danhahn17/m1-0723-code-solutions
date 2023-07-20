/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  const initialsOfPerson =
    person.firstName.charAt(0) + person.lastName.charAt(0);
  return initialsOfPerson;
}
