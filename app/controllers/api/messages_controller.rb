class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    if logged_in?
      @message.author_id = current_user.id
    end
    @conversation = @message.conversation


    if @message.save
      render :show
    else
      render json: @message.errors, status: 402
    end

  end


  private

  def message_params
    params.require(:message).permit(:author_id, :conversation_id, :body)
  end
end
