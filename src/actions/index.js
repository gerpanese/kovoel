// You can delete this function
const initialAction = () => {};

const flashCardSuccessfullyLearned = (id) => ({
  type: 'FLASH_CARD_SUCESSFULLY_LEARNED', id });

const flashCardFaultyLearned = (id) => ({
  type: 'FLASH_CARD_FAULTY_LEARNED', id });

export { initialAction, flashCardSuccessfullyLearned, flashCardFaultyLearned };
