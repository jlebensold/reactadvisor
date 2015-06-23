class CommentsController < ApplicationController
  def index
    @comments = Comment.where(restaurant_id: params[:restaurant_id])
  end

  def create
    @comment = Comment.create(comment_params.merge(restaurant_id: params[:restaurant_id]))
  end

  def comment_params
    params.require(:comment).permit(:body,:author, :parent_id)
  end
end
