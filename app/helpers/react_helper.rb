module ReactHelper
  def isomorphic(component, props)
    component = HTTParty.post "http://localhost:3001", body: {component: component, props: props}.to_json, headers: {'Content-Type' => "application/json"}
    component.html_safe
  end
end
