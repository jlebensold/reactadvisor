json.(comment, :id, :body, :author, :rank)
json.parent_id comment.try(:parent).try(:id)
json.created_at comment.created_at.to_s
