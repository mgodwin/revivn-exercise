# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_09_20_192237) do
  create_table "addresses", force: :cascade do |t|
    t.string "address_1"
    t.string "address_2"
    t.string "city"
    t.string "state"
    t.string "zip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "customers", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pickup_request_activities", force: :cascade do |t|
    t.string "type"
    t.text "additional_data"
    t.integer "pickup_request_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pickup_request_id"], name: "index_pickup_request_activities_on_pickup_request_id"
  end

  create_table "pickup_requests", force: :cascade do |t|
    t.date "date"
    t.string "status"
    t.integer "address_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "customer_id"
    t.index ["address_id"], name: "index_pickup_requests_on_address_id"
    t.index ["customer_id"], name: "index_pickup_requests_on_customer_id"
  end

end
