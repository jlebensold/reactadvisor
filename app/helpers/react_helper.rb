module ReactHelper
  def client(component, id, props)
    sc = script(component, id, props)
    "<div id='#{id}'></div>#{sc}".html_safe
  end

  def isomorphic(component, id, props)
    sc = script(component, id, props)
    component = HTTParty.post "http://localhost:3001", body: {component: component, props: props}.to_json, headers: {'Content-Type' => "application/json"}
    "<div id='#{id}'>#{component}</div>#{sc}".html_safe
  end

  private

  def script(component, id, props)
    "<script>
  document.addEventListener(\"DOMContentLoaded\", function(event) {
    renderReact('#{id}', '#{component}', #{props.to_json});
  });
</script>"
  end

end
