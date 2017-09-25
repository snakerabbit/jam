class Api::ConversationsController < ApplicationController

  def create
    @conversation = Conversation.new(conversation_params)
    @messages = @conversation.messages

    if @conversation.save
      render :show
    else
      render json: @conversation.errors, status: 422
    end
  end

  def show
    @conversation = Conversation.find(params[:id])
    @messages = @conversation.messages.order(created_at: :asc)
    render :show
  end

  def index
    @conversations = Conversation
                    .includes(:messages)
                    .includes(:user_one_id)
                    .includes(:user_two_id)
                    .where("user_one_id = ? OR user_two_id = ?", current_user.id)
                    .order(updated_at: :desc)
    render :index
  end

  private

  def conversation_params
    params.require(:conversation).permit(:user_one_id, :user_two_id)
  end
end
