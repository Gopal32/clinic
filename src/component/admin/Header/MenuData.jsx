import React from 'react';
import * as MdIcons from 'react-icons/md';
import * as GoIcons from 'react-icons/go';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io5';
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';

export const MenuData = [
    {
        title : 'Patient Info',
        path : '/admin/patient_info',
        icon : <MdIcons.MdPeopleAlt />,
    },
    {
        title : 'Doctor',
        path : '',
        icon : <GoIcons.GoDiffAdded />,
        iconOpen : <RiIcons.RiArrowUpSFill />,
        iconClose : <RiIcons.RiArrowDownSFill />,

        subMenu :[
            {
                title : 'Add Doctor',
                path : '/admin/doctor/add_doctor',
                icon : <IoIcons.IoAddCircleOutline />,
            },
            {
                title : 'Search Doctor',
                path : '/admin/doctor/search_doctor',
                icon : <BiIcons.BiSearchAlt />,
            }
        ]
    },
    {
        title : 'Add Doctor Category',
        path : '/admin/add_doctor_category',
        icon : <BiIcons.BiCategoryAlt />,
    },
    {
        title : 'Recent Appointment',
        path : '/admin/recent_app',
        icon : <AiIcons.AiOutlineClockCircle />,
    }
    
]