export const fetchUserAnswer = userAnswerId => {
  return $.ajax({
    method: "GET",
    url: `api/user_answers/${userAnswerId}`
  });
};

export const fetchUserAnswers = () => {
  return $.ajax({
    method: "GET",
    url: "api/user_answers"
  });
};

export const postUserAnswer = userAnswer => {
  return $.ajax({
    method: "POST",
    url: "api/user_answers",
    data: {userAnswer}
  });
};
