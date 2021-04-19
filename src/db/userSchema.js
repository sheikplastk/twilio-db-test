const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    gender : String,
    password : String,
    cell_phone_country_code : String,
    phone_number : String,
    office_phone_country_code : String,
    office_phone_number : String,
    home_phone_country_code : String,
    home_phone_number : String,
    email_notification_preference : Boolean,
    sms_text_notification_preference : Boolean,
    language : String,
    identity_type : String,
    identity_number : String,
    identity_expiry_date : String,
    identity_place_of_issue : String,
    identity_country : String,
    identity_province : String,
    address_line_1 : String,
    address_line_2 : String,
    canada_post_verification_status: String,
    application_type : Boolean,
    customer_id : String,
    customer_number : String,
    last_four_digits : String,
    wallet_number : String,
    security_number : String,
    card_number : String,
    cvv : String,
    card_expiry : String,
    status : String,
    email : String,
    first_name : String,
    middle_name : String,
    last_name : String,
    dob : Date,
    sin : String,
    why_do_you_want_the_card : String,
    how_did_you_hear_about_us : String,
    other_source : String,
    street_address : String,
    suite_number : String,
    city : String,
    province : String,
    postal_code : String,
    authorized_user_check : Boolean,
    authorized_first_name : String,
    authorized_middle_name : String,
    authorized_last_name : String,
    authorized_street_address : String,
    authorized_city : String,
    authorized_province : String,
    authorized_postal_code : String,
    authorized_suite_number : String,
    authorized_same_address : Boolean,
    authorized_phone : String,
    authorized_email : String,
    employment_status : String,
    annual_salary_before_tax : String,
    current_employer : String,
    employment_year : String,
    employment_month : String,
    job_description : String,
    rent_on_mortgage : String,
    other_house_income : String,
    mortgage : String,
    industry : String,
    credit_limit : String,
    ip : String,
    referred_by : String,
    order_number : String,
    referral_code : String,
}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema);

module.exports = User;