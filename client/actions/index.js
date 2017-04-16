export const SELECT_GROUP_ANSWERING = 'SELECT_GROUP_ANSWERING';
export const SELECT_INDIVIDUAL_ANSWERING = 'SELECT_INDIVIDUAL_ANSWERING';


export function selectGroupAnswering() {
  const GROUP_ANSWERING = 'GA';
  return {
    type: SELECT_GROUP_ANSWERING,
    payload: GROUP_ANSWERING,
  };
}

export function selectIndividualAnswering() {
  const INDIVIDUAL_ANSWERING = 'IA';
  return {
    type: SELECT_INDIVIDUAL_ANSWERING,
    payload: INDIVIDUAL_ANSWERING,
  };
}
