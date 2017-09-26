@responses.each do |response|
  json.set! response.id do
    json.extract! response, :answer_id, :question, :accepted_answers, :explanation
  end
end
