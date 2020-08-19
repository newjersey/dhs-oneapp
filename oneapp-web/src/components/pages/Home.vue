<template>
    <div id="HomePage">

        <!-- TOP HERO -->

        <section>
            <us-container>
                <us-row align-v="start" v-t>
                    <us-col class="top-hero-text">
                        <h1 class="mb-4">Apply for New Jersey social services</h1>
                        <p class="mb-4 " >Get food or cash assistance through one application.</p>
                        <us-button variant="primary" block="sm" size="lg" :to="{ name: 'apply' }"  >Apply now</us-button>
                        <p>Already started an application? <us-button variant="link" :to="{ name: 'login' }">Sign in</us-button></p>
                    </us-col>
                    <us-col class="d-none d-lg-block d-xl-block pt-3">
                        <us-img src="/images/home/home_hero_762x300.png" fluid alt="hero image" />
                    </us-col>
                </us-row>
            </us-container>
        </section>

        <!-- PROGRAMS HERO -->

        <section style="background-color:white">
            <us-container>

                <h2 style="color:#004877; margin-bottom:23px">Programs you can apply for:</h2>

                <div style="background-color:#004877" class="text-white pl-4 pr-4 pt-5 pb-4">
                    <us-row gutter="lg">
                        <us-col md="6">
                            <h2 class="text-bold">Food Assistance</h2>
                            <p class="text-bold mb-0">Supplemental Nutrition Assistance Program (SNAP)</p>
                            <p class="mt-0">Money for food at supermarkets, farmer’s markets, and other approved stores</p>
                        </us-col>
                        <us-col class="d-md-none">
                            <hr style="border-color:rgba(255,255,255,0.45);" />
                        </us-col>
                        <us-col md="6">
                            <h2 class="text-bold">Cash Assistance</h2>
                            <p class="text-bold mb-0">Temporary Assistance for Needy Families (TANF) or General Assistance (GA)</p>
                            <p class="mt-0">Monthly cash, short-term housing support, child care, job search, and readiness training</p>
                        </us-col>
                    </us-row>
                </div>

                <p class="mt-0 pl-2">
                    <small>
                        <strong>Note:</strong> For free or low-cost health care, fill out the
                        <a class="basic-link" href="http://www.njfamilycare.org/default.aspx">NJ FamilyCare / Medicaid application.</a>
                    </small>
                </p>
            </us-container>
        </section>

        <!-- STEPS HERO -->

        <section style="background-color:#F2F2F2">
            <us-container class="text-center text-md-left">
                <h2>What are the steps?</h2>

                <us-row>
                    <us-col md="6" lg="3">
                        <us-img src="/images/home/home_icon_apply_80x80.png" width="80px" fluid alt="apply image" />
                        <p>
                            <b>Submit an application</b><br />
                            This should take about 15 minutes.
                        </p>
                    </us-col>
                    <us-col md="6" lg="3">
                        <us-img src="/images/home/home_icon_interview_80x80.png" width="80px" fluid alt="apply image" />
                        <p>
                            <b>Complete an interview</b><br />
                            You’ll be contacted via phone or mail to discuss your application.
                        </p>
                    </us-col>
                    <us-col md="6" lg="3">
                        <us-img src="/images/home/home_icon_upload_80x80.png" width="80px" fluid alt="apply image" />
                        <p>
                            <b>Send in verifications</b><br />
                            We'll verify your eligibility based on the documents that you provide.
                        </p>
                    </us-col>
                    <us-col md="6" lg="3">
                        <us-img src="/images/home/home_icon_get_80x80.png" width="80px" fluid alt="apply image" />
                        <p>
                            <b>Get your benefits</b><br />
                            We’ll make a decision within 30 days.
                        </p>
                    </us-col>
                </us-row>
            </us-container>
        </section>


        <!-- CHECK STATUS HERO -->

        <section style="background-color:white">
            <us-container>
                <h2 style="margin-bottom:19px">Already completed your application?</h2>
                <us-row>
                    <us-col md="6">
                        <p>Upload requested documents to your county</p>
                        <us-button variant="primary" block="sm" :to="{ name: 'status' }">Submit documents</us-button>
                    </us-col>
                    <us-col md="6">
                        <p>View the status of your application</p>
                        <us-button variant="primary" block="sm" :to="{ name: 'status' }">Check your status</us-button>
                    </us-col>
                </us-row>
            </us-container>
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
            font-size: 30px;
            letter-spacing: 0;
            line-height: 35px;
        }
    }

    p {
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
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
