<template>
    <us-container id="ApplyStartPage" align="left">

        {{selCompDur}}<span ng-if="selCompDur == '0d' || selCompDur == '1d'">{{compDurs[selCompDur].label}}</span>


        <!-- 
        <us-card bg-variant="white" border-variant="none" class="mt-6">
        -->
        <div class="form-wrapper px-sm-2 px-md-6 px-lg-8">

            <h1 v-t>Apply for food or cash assistance</h1>

            <us-alert title="Save time—and save your work in progress — by signing in before starting your application" variant="primary">            
                <p v-t>
                    When you’re signed into your account you can save your application in progress, and come back later to finish filling it out. You’ll have 45 days from the date
                    you start or update your application to submit it. If you’re unable to complete your application by then, you’ll have to start a new application.
                </p>
                <div>
                    <us-button variant="primary" class="mt-2 mb-2" :to="{ name: 'register' }" v-t>Create an account</us-button>
                </div>
                <div>
                    <us-button variant="link" class="pl-0" :to="{ name: 'one-app' }" v-t>Start your application without signing in</us-button>
                </div>
            </us-alert>

            <h2 class="mt-5" v-t>Follow the steps below to apply for assistance</h2>

            <!-- PREPARE CARD -->

            <timeline-card title="Prepare" :number="1" class="mt-3" v-t>
                
                <p>To fill out this application, you’ll need the information below.</p>

                <p class="mb-1"><strong>For every person living in your home:</strong></p>

                <ul>
                    <li>Name</li>
                    <li>Birthdate</li>
                    <li>Income (money you receive from a job, rental properties, and any other sources)</li>
                    <li>Expenses (money you spend on rent, utilities, child care, and other needs)</li>
                </ul>
                                
                <p class="mb-1"><strong>Only for those people who you want to get assistance:</strong></p>

                <ul>
                    <li>Social Security number</li>
                    <li>U.S. citizenship or immigration status</li>
                    <li>Current home address</li>
                </ul>

                <p><strong>Note</strong> You must be a U.S. Citizen or legal permanent resident, living in NJ, to get assistance. Children under 18 years old may be eligible even if their parents aren’t.</p>

            </timeline-card>   

            <!-- APPLY CARD -->

            <timeline-card title="Apply" :number="2" v-t>
                <p>Complete the online application. Depending on the amount of people in your household and the amount of information you provide, this should take about 20 to 45 minutes. </p>
                <p>When you submit your application, you’ll get a confirmation message. You can print this for your records.</p>
            </timeline-card>            


            <!-- UPLOAD CARD -->

            <timeline-card title="Upload supporting documents" :number="3" v-t>
                <p>Upload copies of documents we’ll need to confirm the information on your application. These may include documents like your:</p>
                <ul>
                    <li>Birth certificate, driver’s license, or other valid ID</li>
                    <li>Current I-94 or I-551 (green card) if you’re not a U.S. citizen</li>
                    <li>Pay stubs or tax returns</li>
                    <li>Rental agreement or mortgage statement</li>
                    <li>Water, electric, phone, or other utility bills</li>
                    <li>Receipts for child care, health care, or other expenses</li>
                </ul>
                <p><us-button variant="link" class="p-0" :to="{name:'document-checklist'}">Get a checklist of documents you’ll need to provide</us-button></p>
                <p>
                    <strong>Note:</strong> You can <us-button variant="link" class="p-0 m-0" :to="{name:'upload-documents'}">upload documents</us-button> for up to 60 days after you apply.
                </p>
            </timeline-card>                 


            <!-- INTERVIEW CARD -->

            <timeline-card title="Complete your application interview" :number="4" v-t>
                <p>We’ll send you a letter in the mail with the date and time for your phone or in-person interview. In the interview, we’ll 
                    ask for more information about you and others living in your home. This will help us decide if you’re eligible for assistance. </p>
                <p><strong>Note:</strong> If you can’t make your interview, please contact the number listed on your letter right away to reschedule.</p>
            </timeline-card>  

            <!-- DECISION -->

            <timeline-card title="Get your decision" :number="5" no-border style="border-left: 8px solid rgba(0,0,0,0);" v-t>
                <p>We’ll send you a letter in the mail to tell you if you’re eligible for assistance.</p>
                <p><strong>If you’re eligible</strong><br/>
                    You can get assistance within <strong>30 days</strong> from when we receive your application. If you have little 
                    to no money and need help right away, we may start your assistance within <strong>7 days</strong>. Your letter 
                    will explain how much assistance you’ll get, and when you’ll need to reapply.</p>
                <p><strong>If you’re not eligible</strong><br/>
                    Your letter will explain why. It will also include information about how to request a hearing if you disagree with our decision.
                </p>
            </timeline-card>  
            
            <!-- START APPLICATION -->

            <section v-t>

                <div>
                    <us-button variant="primary" class="mt-2 mb-2" :to="{ name: 'register' }" v-t>Create an account</us-button>
                </div>
                <div>
                    <us-button variant="link" class="pl-0" :to="{ name: 'one-app' }" v-t>Start your application without signing in</us-button>
                </div>

                <p class="mt-4"><strong>Note:</strong> You must provide or apply for a Social Security number (SSN) to get assistance. We use your SSN to 
                help verify that you are who you say you are, and that you qualify for assistance. We may share this information with other 
                federal and state agencies. <us-button variant="link" class="p-0 m-0" href="https://nj.gov/nj/privacy.html">Read our full privacy policy</us-button>.</p>

            </section>

            <section v-t class="mt-5 mb-5">
                <h3>Need help applying?</h3>
                <hr style="border-top: 5px #0071BC solid"/>
                <p>
                    Call us at: [phone number]<br/>
                    TTY: [TTY number]
                </p>
                <p>Monday – Friday, 8:00 a.m. – 8:00 p.m. ET</p>
            </section>

        </div>
    </us-container>
</template>

<script>
//import InfoCard from '@/components/partials/cards/InfoCard.vue';
import TimelineCard from '@/components/partials/cards/TimelineCard.vue';

export default {
    name: 'apply',
    components: { 
        //InfoCard,
        TimelineCard
    }
};
</script>
<style lang="scss">
#ApplyStartPage {
    
    //.us-card {
    //    border: 1px solid #E6E6E6;
    //    border-radius: 0px !important;
    //}

    section {
        line-height: 1.4em;
    }
    
    li {
        font-weight: normal;
    }

    .form-wrapper {
        width: 100%;
        //max-width: 850px;
        margin-left: auto;
        margin-right: auto;
        padding-top: 30px;
        margin-bottom: 40px;
        margin-top: 50px;
        background-color: white;
        border: 1px solid #E6E6E6;
    }
}
</style>
