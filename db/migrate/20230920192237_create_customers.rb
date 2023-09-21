class CreateCustomers < ActiveRecord::Migration[7.0]
  def change
    create_table :customers do |t|
      t.string :name

      t.timestamps
    end

    change_table :pickup_requests do |t|
      t.belongs_to :customer
    end
  end
end
