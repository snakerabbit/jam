class Api::ResponsesController < ApplicationController

  def create
    @response = Response.new(response_params)
    @question = @response.question
    if @response.save
      render :index
    else
      render json: @response.errors, status: 422
    end
  end

  def show
    @response = Response.find(params[:id])
    if @response
      render :show
    else
      render json: []
    end
  end

  def index
    @responses = Response.includes(:question)
                         .where("user_id = ?", current_user.id)
    if @responses
      render :index
    else
      render json: []
    end
  end

  def response_params
    params.require(:response).permit(:answer_id,
                                     :user_id,
                                     :importance,
                                     :explanation,
                                     accepted_answers: [])
  end
end
