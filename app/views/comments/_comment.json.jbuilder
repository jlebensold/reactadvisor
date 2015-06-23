json.(comment, :id, :body, :author)
json.parent_id comment.try(:parent).try(:id)
json.created_at comment.created_at.to_s
