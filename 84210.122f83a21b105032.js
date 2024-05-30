(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[84210],{84210:n=>{n.exports="import {AsyncPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {assets} from '@demo/utils';\nimport {TuiAmountPipe} from '@taiga-ui/addon-commerce';\nimport {TuiDropdownMobileDirective} from '@taiga-ui/addon-mobile';\nimport {\n    TuiButtonDirective,\n    TuiDropdownModule,\n    TuiTextfieldControllerModule,\n    TuiTitleDirective,\n} from '@taiga-ui/core';\nimport {\n    TuiAvatarComponent,\n    TuiDataListWrapper,\n    TuiFilterByInputPipe,\n} from '@taiga-ui/kit';\nimport {TuiCellDirective} from '@taiga-ui/layout';\nimport {\n    TuiComboBoxModule,\n    TuiInputNumberModule,\n    TuiMultiSelectModule,\n    TuiSelectModule,\n} from '@taiga-ui/legacy';\n\ninterface User {\n    readonly url: string;\n    readonly name: string;\n    readonly balance: number;\n}\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent6\",\n    imports: [\n        AsyncPipe,\n        FormsModule,\n        TuiDropdownModule,\n        TuiComboBoxModule,\n        TuiDropdownMobileDirective,\n        TuiTextfieldControllerModule,\n        TuiDataListWrapper,\n        TuiFilterByInputPipe,\n        TuiSelectModule,\n        TuiMultiSelectModule,\n        TuiButtonDirective,\n        TuiInputNumberModule,\n        TuiCellDirective,\n        TuiAvatarComponent,\n        TuiTitleDirective,\n        TuiAmountPipe,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected country = null;\n    protected selected: readonly User[] = [];\n    protected sum = null;\n    protected user: User | null = null;\n\n    protected open = false;\n\n    protected readonly countries = [\n        'Afghanistan',\n        'Albania',\n        'Algeria',\n        'American Samoa',\n        'Andorra',\n        'Angola',\n        'Anguilla',\n        'Antarctica',\n        'Antigua and Barbuda',\n        'Argentina',\n        'Armenia',\n        'Aruba',\n        'Australia',\n        'Austria',\n        'Azerbaijan',\n        'Bahamas',\n        'Bahrain',\n        'Bangladesh',\n        'Barbados',\n        'Belarus',\n        'Belgium',\n        'Belize',\n        'Benin',\n        'Bermuda',\n        'Bhutan',\n        'Bolivia',\n        'Bonaire, Sint Eustatius and Saba',\n        'Bosnia and Herzegovina',\n        'Botswana',\n        'Bouvet Island',\n        'Brazil',\n        'British Indian Ocean Territory',\n        'Brunei Darussalam',\n        'Bulgaria',\n        'Burkina Faso',\n        'Burundi',\n        'Cabo Verde',\n        'Cambodia',\n        'Cameroon',\n        'Canada',\n        'Cayman Islands',\n        'Central African Republic',\n        'Chad',\n        'Chile',\n        'China',\n        'Christmas Island',\n        'Cocos (Keeling) Islands',\n        'Colombia',\n        'Comoros',\n        'Congo',\n        'Cook Islands',\n        'Costa Rica',\n        'Croatia',\n        'Cuba',\n        'Curaçao',\n        'Cyprus',\n        'Czechia',\n        // eslint-disable-next-line @typescript-eslint/quotes\n        \"Côte d'Ivoire\",\n        'Denmark',\n        'Djibouti',\n        'Dominica',\n        'Dominican Republic',\n        'Ecuador',\n        'Egypt',\n        'El Salvador',\n        'Equatorial Guinea',\n        'Eritrea',\n        'Estonia',\n        'Eswatini',\n        'Ethiopia',\n        'Falkland Islands',\n        'Faroe Islands',\n        'Fiji',\n        'Finland',\n        'France',\n        'French Guiana',\n        'French Polynesia',\n        'French Southern Territories',\n        'Gabon',\n        'Gambia',\n        'Georgia',\n        'Germany',\n        'Ghana',\n        'Gibraltar',\n        'Greece',\n        'Greenland',\n        'Grenada',\n        'Guadeloupe',\n        'Guam',\n        'Guatemala',\n        'Guernsey',\n        'Guinea',\n        'Guinea-Bissau',\n        'Guyana',\n        'Haiti',\n        'Heard Island and McDonald Islands',\n        'Holy See',\n        'Honduras',\n        'Hong Kong',\n        'Hungary',\n        'Iceland',\n        'India',\n        'Indonesia',\n        'Iran',\n        'Iraq',\n        'Ireland',\n        'Isle of Man',\n        'Israel',\n        'Italy',\n        'Jamaica',\n        'Japan',\n        'Jersey',\n        'Jordan',\n        'Kazakhstan',\n        'Kenya',\n        'Kiribati',\n        'Korea',\n        'Kuwait',\n        'Kyrgyzstan',\n        // eslint-disable-next-line @typescript-eslint/quotes\n        \"Lao People's Democratic Republic\",\n        'Latvia',\n        'Lebanon',\n        'Lesotho',\n        'Liberia',\n        'Libya',\n        'Liechtenstein',\n        'Lithuania',\n        'Luxembourg',\n        'Macao',\n        'Madagascar',\n        'Malawi',\n        'Malaysia',\n        'Maldives',\n        'Mali',\n        'Malta',\n        'Marshall Islands',\n        'Martinique',\n        'Mauritania',\n        'Mauritius',\n        'Mayotte',\n        'Mexico',\n        'Micronesia',\n        'Moldova',\n        'Monaco',\n        'Mongolia',\n        'Montenegro',\n        'Montserrat',\n        'Morocco',\n        'Mozambique',\n        'Myanmar',\n        'Namibia',\n        'Nauru',\n        'Nepal',\n        'Netherlands',\n        'New Caledonia',\n        'New Zealand',\n        'Nicaragua',\n        'Niger',\n        'Nigeria',\n        'Niue',\n        'Norfolk Island',\n        'Northern Mariana Islands',\n        'Norway',\n        'Oman',\n        'Pakistan',\n        'Palau',\n        'Palestine, State of',\n        'Panama',\n        'Papua New Guinea',\n        'Paraguay',\n        'Peru',\n        'Philippines',\n        'Pitcairn',\n        'Poland',\n        'Portugal',\n        'Puerto Rico',\n        'Qatar',\n        'Republic of North Macedonia',\n        'Romania',\n        'Russian Federation',\n        'Rwanda',\n        'Réunion',\n        'Saint Barthélemy',\n        'Saint Helena',\n        'Saint Kitts and Nevis',\n        'Saint Lucia',\n        'Saint Martin',\n        'Saint Pierre and Miquelon',\n        'Saint Vincent and the Grenadines',\n        'Samoa',\n        'San Marino',\n        'Sao Tome and Principe',\n        'Saudi Arabia',\n        'Senegal',\n        'Serbia',\n        'Seychelles',\n        'Sierra Leone',\n        'Singapore',\n        'Sint Maarten (Dutch part)',\n        'Slovakia',\n        'Slovenia',\n        'Solomon Islands',\n        'Somalia',\n        'South Africa',\n        'South Georgia',\n        'South Sudan',\n        'Spain',\n        'Sri Lanka',\n        'Sudan',\n        'Suriname',\n        'Svalbard and Jan Mayen',\n        'Sweden',\n        'Switzerland',\n        'Syrian Arab Republic',\n        'Taiwan',\n        'Tajikistan',\n        'Tanzania, United Republic of',\n        'Thailand',\n        'Timor-Leste',\n        'Togo',\n        'Tokelau',\n        'Tonga',\n        'Trinidad and Tobago',\n        'Tunisia',\n        'Turkey',\n        'Turkmenistan',\n        'Turks and Caicos Islands',\n        'Tuvalu',\n        'Uganda',\n        'Ukraine',\n        'United Arab Emirates',\n        'United Kingdom',\n        'United States of America',\n        'Uruguay',\n        'Uzbekistan',\n        'Vanuatu',\n        'Venezuela',\n        'Viet Nam',\n        'Virgin Islands (British)',\n        'Virgin Islands (U.S.)',\n        'Wallis and Futuna',\n        'Western Sahara',\n        'Yemen',\n        'Zambia',\n        'Zimbabwe',\n        'Åland Islands',\n    ];\n\n    protected readonly users: readonly User[] = [\n        {name: 'Alex Inkin', balance: 1323525, url: assets`/images/avatar.jpg`},\n        {name: 'Roman Sedov', balance: 523242, url: 'RS'},\n        {name: 'Vladimir Potekhin', balance: 645465, url: 'VP'},\n        {name: 'Nikita Barsukov', balance: 468468, url: 'NB'},\n        {name: 'Maxim Ivanov', balance: 498654, url: 'MI'},\n    ];\n\n    protected readonly stringify = ({name}: User): string => name;\n}\n"}}]);