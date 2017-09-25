json.conversationId @conversation.id
json.user_one @conversation.user_one
json.user_two @conversation.user_two

json.messages do
  @conversation.messages.each do |message|
    json.set! message.d do
      json.author_id message.author_id
      json.body message.body
      json.created_at message.created_at
    end
  end
end
