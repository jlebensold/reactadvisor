require 'rails_helper'
describe 'restaurant comments', js: true do
  let(:restaurant) { Restaurant.create(name: 'Los Pollos') }

  it 'adds comments' do
    visit restaurant_path(restaurant)
    within 'form.row' do
      fill_in :author, with: 'Jon'
      fill_in :body, with: 'Delicious!'
      find_button('Submit').click()
    end
    sleep 0.1
    expect(Comment.all.size).to eq 1
    expect(page.body).to have_content 'Delicious!'
  end

  context :replies do

    let!(:comment) { Comment.create(author: 'JL', body: 'Delicious!', rank: 0, restaurant: restaurant) }

    before do
      visit restaurant_path(restaurant)
    end


    it 'upvotes' do
      find_button('+1').click()
      expect(find('.comment.row .label.secondary.right')).to have_text '1'
    end

    it 'replies to comments' do
      find_button('Reply').click()
      within '.comment form.row' do
        fill_in :author, with: 'Sally'
        fill_in :body, with: 'I disagree!'
        find_button('Submit').click()
      end
      sleep 0.1
      expect(page.body).to have_content 'I disagree!'
      expect(page.body).to have_content 'by Sally'
      expect(Comment.find_by(author: 'Sally').parent_id).to eq comment.id
    end
  end
end
