class CreatePickupRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :pickup_requests do |t|
      t.date :date
      t.string :status
      t.belongs_to :address

      t.timestamps
    end
  end
end
