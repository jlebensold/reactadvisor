json.(comment, :id, :body, :author, :rank, :restaurant_id)
json.parent_id comment.try(:parent).try(:id)
json.created_at comment.created_at.to_s
