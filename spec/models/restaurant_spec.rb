require 'rails_helper'

describe Restaurant do
  let(:restaurant) { Restaurant.new(name: 'Chipotle') }
  it 'returns name when cast to string' do
    expect(restaurant.to_s).to eq 'Chipotle' 
  end
end
