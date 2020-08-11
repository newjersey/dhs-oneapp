/*
import _ from 'lodash';

const ipsum = `Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque odio magna ornare eu tortor sit amet efficitur vestibulum dolor 
Sed id malesuada nibh Vestibulum nec massa in leo dictum finibus Sed molestie eleifend ultrices Sed sodales mollis nisl id pulvinar Etiam nec 
iaculis leo at lacinia velit Vivamus aliquet risus vitae metus accumsan vel cursus erat semper Ut in congue urna ac placerat augue 
Duis a justo ligula Duis molestie nibh in fringilla consectetur arcu ex placerat mi vitae lobortis orci ex id erat Nulla facilisi Nulla 
massa enim hendrerit eu sapien ut faucibus ultricies leo Quisque fringilla risus et lectus efficitur condimentum Suspendisse ac auctor arcu 
sed consectetur justo Donec dignissim pretium augue non dignissim augue rhoncus et Integer scelerisque tincidunt mauris id interdum metus tincidunt quis
Nam et risus eu metus bibendum aliquet vitae vitae eros Quisque volutpat mauris sem in mattis metus aliquam nec Fusce ac massa dui Donec interdum 
pulvinar felis vitae porta Sed finibus metus eget nibh tincidunt convallis Nam eleifend nisi ut nisl pulvinar id scelerisque tortor facilisis 
Vestibulum vehicula sem eros quis gravida enim dignissim sed Morbi eget egestas orci Sed mollis finibus mollis Proin malesuada nibh mattis augue 
tincidunt ac facilisis nisl euismod In efficitur magna eu accumsan aliquet erat enim lacinia libero vitae lobortis turpis urna non est 
Nunc eu odio commodo luctus mi ac facilisis metus Maecenas vulputate mi quis laoreet elementum arcu nisl fringilla odio ac pretium tortor 
massa imperdiet neque Suspendisse eget pretium mi Praesent id libero ac quam dictum cursus Suspendisse a nibh sit amet lorem pharetra hendrerit 
Praesent vitae porta felis quis volutpat ante Mauris quis enim sodales mollis ante vel ultricies arcu Cras enim magna hendrerit a est ut 
vestibulum elementum ipsum Suspendisse tempus nibh ut libero pulvinar id porttitor dui pretium Nam venenatis mi et elit efficitur aliquet 
Nullam ut suscipit felis Vestibulum ullamcorper lorem libero tincidunt gravida dui auctor ut Aliquam et ante accumsan pulvinar ante eu 
egestas turpis Etiam nec risus velit Morbi aliquet odio non consequat elementum Sed eu viverra lacus Nullam tincidunt suscipit orci ac molestie 
Vestibulum tincidunt sed odio vel laoreet Vestibulum sodales blandit eros nec congue lorem accumsan ac Class aptent taciti sociosqu ad litora 
torquent per conubia nostra per inceptos himenaeos Nullam vitae elementum libero Quisque justo magna posuere vitae vehicula vitae auctor et metus 
Suspendisse ut tortor sed ante auctor porta vel nec odio Quisque ut imperdiet nibh Nulla pellentesque odio eu scelerisque semper 
Aliquam egestas nibh nec aliquam suscipit mauris dui ullamcorper erat sed vulputate augue lorem at orci Aenean ac imperdiet neque 
Nam dapibus aliquam eros sed efficitur Integer cursus risus id accumsan accumsan Praesent ornare nulla at molestie luctus libero metus 
accumsan massa eget dignissim erat felis in erat Donec ex velit commodo in ex in lobortis cursus lacus In quis sapien arcu`.split(' ');

const getIpsum = (noWords) => {
    return _.sample(ipsum, noWords).join(' ');
}
*/

module.exports = [
    {
        title: 'Kitchen Sink',
        canSkip: false,
        fields: [
            { type: 'email', key: 'testEmail', label: 'What is you email?', help: 'Lorem ipsum dolor sit amet consectetur adipiscing elit', required: true },
            { type: 'password', key: 'testPassword', label: 'What is your password?', help: 'Lorem ipsum dolor sit amet consectetur adipiscing elit', required: true },
            { type: 'phone', key: 'testPhone', label: 'What is your phone number?', help: 'Lorem ipsum dolor sit amet consectetur adipiscing elit', required: true },
            { type: 'zip', key: 'testZip', label: 'What is your zip code?', help: 'Lorem ipsum dolor sit amet consectetur adipiscing elit', required: true }
        ]
    },
    {
        title: 'Basic Information',
        canSkip: false,
        fields: [
            { type: 'text', key: 'firstName', label: 'What’s your first name?', help: 'Legally as it appears on your ID', required: true },
            { type: 'text', key: 'middleName', label: 'What’s your middle name?', help: 'This is optional', required: false },
            { type: 'text', key: 'maidenName', label: 'What’s your maiden name?', help: 'This is optional', required: false },
            { type: 'text', key: 'lastName', label: 'What’s your last name?', help: 'Legally as it appears on your ID', required: true },
            { type: 'divider', title: 'Tell us about yourself', lead: '' },
            { type: 'text', key: 'firstName', label: 'What’s your first name?', help: 'Legally as it appears on your ID', required: true },
            { type: 'text', key: 'middleName', label: 'What’s your middle name?', help: 'This is optional', required: false },
            { type: 'text', key: 'maidenName', label: 'What’s your maiden name?', help: 'This is optional', required: false },
            { type: 'text', key: 'lastName', label: 'What’s your last name?', help: 'Legally as it appears on your ID', required: true },
            { type: 'divider', title: 'Who is the payee?', lead: '' },
            {
                type: 'confirm',
                key: 'isPayee',
                label: 'Are you the payee?',
                help: 'The payee is the adult household member who will be issued the benefits if you’re deemed eligible for NJ SNAP, TANF, or GA benefits.',
                required: true
            },
            { type: 'divider', title: 'What’s your current living situation?', lead: '' },
            { type: 'confirm', key: 'isHomeless', label: 'Are you currently experiencing homelessness?', required: true }
        ]
    },
    {
        title: 'Enter Address',
        canSkip: true,
        fields: [
            { key: 'address1', label: 'Address Line 1', type: 'text', required: true },
            { key: 'address2', label: 'Address Line 2', type: 'text' },
            { key: 'city', label: 'City', type: 'text', required: true },
            {
                type: 'row',
                fields: [
                    { key: 'state', label: 'State', type: 'state', required: true },
                    { key: 'zip', label: 'Zip', type: 'zip', required: true }
                ]
            }
        ]
    },
    {
        title: 'Personal Info',
        canSkip: true,
        fields: [
            { key: 'firstName', label: 'First name', type: 'text', required: true },
            { key: 'lastName', label: 'Last name', type: 'text', required: true },
            { key: 'phoneNumber', label: 'Phone Number', type: 'phone', required: true },
            { key: 'ssn', label: 'Social Security', type: 'ssn', description: 'We need this to verify your accounts, we will never sell your contact information!' },
            { key: 'dateOfBirth', label: 'Date of birth', type: 'date', startDate: new Date('1970') }
        ]
    },
    {
        title: 'Verification Documents',
        canSkip: true,
        fields: [{ key: 'doc', label: 'Drivers License', type: 'file' }]
    }
];
