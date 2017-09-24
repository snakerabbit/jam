@user_answers.each do |user_answer|
  json.set! user_answer.id do
    json.extract! user_answer, :answer_id, :question, :accepted_choices, :explanation
  end
end
