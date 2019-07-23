class Task < ApplicationRecord
  has_many :logging_times, dependent: :destroy
end
