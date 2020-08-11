<template>
    <div id="HomePage">
        <!-- TOP HERO -->

        <section>
            <b-container>
                <b-row align-v="start" v-t>
                    <b-col class="top-hero-text">
                        <h1 class="mb-4">Apply for New Jersey social services</h1>
                        <p class="mb-4 " >Get food or cash assistance through one application.</p>
                        <b-button variant="primary" class="mb-4 d-block d-lg-inline-block d-xl-inline-block" size="lg" :to="{ name: 'apply' }"  >Apply now</b-button>
                        <p >Already started an application?<b-button variant="link" class="pl-0" :to="{ name: 'login' }">Sign in</b-button></p>
                    </b-col>
                    <b-col class="d-none d-lg-block d-xl-block">
                        <b-img src="/images/home/home_hero_762x300.png" fluid alt="hero image" />
                    </b-col>
                </b-row>
            </b-container>
        </section>

        <!-- PROGRAMS HERO -->

        <section style="background-color:white">
            <b-container>
                <h2 style="color:#004877; margin-bottom:23px">Programs you can apply for:</h2>

                <b-card style="background-color:#004877; padding: 12px; padding-bottom: 18px" text-variant="white">
                    <b-row>
                        <b-col md="6" class="m-lg-r-4">
                            <h2>Food Assistance</h2>
                            <p>
                                <b>Supplemental Nutrition Assistance Program (SNAP)</b>
                                Money for food at supermarkets, farmer’s markets, and other approved stores
                            </p>
                        </b-col>
                        <b-col md="6" class="m-lg-l-4 mt-4 mt-md-0">
                            <hr style="border-color:rgba(255,255,255,0.45); padding-bottom:30px" class="d-none d-sm-block d-md-none" />
                            <h2>Cash Assistance</h2>
                            <p>
                                <b>Temporary Assistance for Needy Families (TANF) or General Assistance (GA)</b>
                                Monthly cash, short-term housing support, child care, job search, and readiness training
                            </p>
                        </b-col>
                    </b-row>
                </b-card>
                <p>
                    <small>
                        *For free or low-cost health care, fill out the
                        <a class="basic-link" href="http://www.njfamilycare.org/default.aspx">NJ FamilyCare / Medicaid application.</a>
                    </small>
                </p>
            </b-container>
        </section>

        <!-- CHECK STATUS HERO -->

        <section style="background-color:#F2F2F2">
            <b-container>
                <h2 style="margin-bottom:19px">Already completed your application?</h2>

                <b-row>
                    <b-col md="6">
                        <p>Upload requested documents to your county</p>
                        <b-button variant="primary" class="d-block d-lg-inline-block d-xl-inline-block" :to="{ name: 'status' }">Submit documents</b-button>
                    </b-col>
                    <b-col md="6" class="m-lg-l-4 mt-4 mt-md-0">
                        <p>View the status of your application</p>
                        <b-button variant="primary" class="d-block d-lg-inline-block d-xl-inline-block" :to="{ name: 'status' }">Check your status</b-button>
                    </b-col>
                </b-row>
            </b-container>
        </section>

        <!-- STEPS HERO -->

        <section style="background-color:white">
            <b-container class="text-center text-md-left text-lg-left text-xl-left">
                <h2>What are the steps?</h2>

                <b-row>
                    <b-col md="6" lg="3">
                        <b-img src="/images/home/home_icon_apply_80x80.png" width="80px" fluid alt="apply image" />
                        <p>
                            <b>Submit an application</b><br />
                            This should take about 15 minutes.
                        </p>
                    </b-col>
                    <b-col md="6" lg="3">
                        <b-img src="/images/home/home_icon_interview_80x80.png" width="80px" fluid alt="apply image" />
                        <p>
                            <b>Complete an interview</b><br />
                            You’ll be contacted via phone or mail to discuss your application.
                        </p>
                    </b-col>
                    <b-col md="6" lg="3">
                        <b-img src="/images/home/home_icon_upload_80x80.png" width="80px" fluid alt="apply image" />
                        <p>
                            <b>Send in verifications</b><br />
                            We'll verify your eligibility based on the documents that you provide.
                        </p>
                    </b-col>
                    <b-col md="6" lg="3">
                        <b-img src="/images/home/home_icon_get_80x80.png" width="80px" fluid alt="apply image" />
                        <p>
                            <b>Get your benefits</b><br />
                            We’ll make a decision within 30 days.
                        </p>
                    </b-col>
                </b-row>
            </b-container>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            test: 'ansdgsdd'
        };
    }
};
</script>
<style lang="scss">
#HomePage {
    font-family: 'Roboto', sans-serif;

    .top-hero-text {
        //padding-top: 66px;
        //background-repeat: no-repeat;
        //background-position: center right;
        //background-size: contain;
        //background-image: url('/images/home/home_hero.png');
    }

    section {
        .container {
            //max-width: 924px;
        }

        h1 {
            font-size: 36px;
            letter-spacing: 0;
            font-weight: 400;
            line-height: 42px;
        }

        h2 {
            font-size: 20px;
            letter-spacing: 0;
            line-height: 24px;
        }
    }

    p {
        font-weight: normal;
    }

    section {
        width: 100%;
        padding-top: 60px;
        padding-bottom: 60px;
    }

    .btn-link {
        text-decoration: underline;
    }

    .basic-link {
        color: black;
        text-decoration: underline;
    }
}
</style>
