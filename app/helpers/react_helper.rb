module ReactHelper
  def isomorphic(component, id, props)
    script = "<script>
  document.addEventListener(\"DOMContentLoaded\", function(event) {
    renderReact('#{id}', '#{component}', #{props.to_json});
  });
</script>"
    component = HTTParty.post "http://localhost:3001", body: {component: component, props: props}.to_json, headers: {'Content-Type' => "application/json"}
    "<div id='#{id}'>#{component}</div>#{script}".html_safe
  end
end
