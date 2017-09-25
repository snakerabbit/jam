@conversations.each do |conversation|
  json.set! conversation.id do
    json.user_one conversation.user_one
    json.user_two conversation.user_two
    json.user_one_id conversation.user_one_id
    json.user_two_id conversation.user_two_id
    latest_message = conversation.messages.last
    if latest_message
      json.latest_message do
        json.extract! latest_message :body
        json.created_at latest_message.created_at
      end
    end

  end
end
