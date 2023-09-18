class CreatePickupRequestActivities < ActiveRecord::Migration[7.0]
  def change
    create_table :pickup_request_activities do |t|
      t.string :type
      t.text :additional_data
      t.belongs_to :pickup_request

      t.timestamps
    end
  end
end
