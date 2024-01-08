import { CategoryItemType, NavbarItemType } from '../types';

export const navbar: NavbarItemType[] = [
    {
        id: 1,
        title: 'Hành động',
        genre_id: 28,
        subMenu: false,
    },
    {
        id: 2,
        title: 'Phiêu lưu',
        genre_id: 12,
        subMenu: false,
    },
    {
        id: 3,
        title: 'Kinh dị',
        genre_id: 27,
        subMenu: false,
    },
    {
        id: 4,
        title: 'Viễn tưởng',
        genre_id: 878,
        subMenu: false,
    },
    {
        id: 5,
        title: 'Thể loại',
        genre_id: 28,
        subMenu: true,
    },
];

export const footerCategory: CategoryItemType[] = [
    {
        title: 'Phim mới',
        child: [
            {
                title: 'Phim Hành Động',
                genre_id: 28,
            },
            {
                title: 'Phim Phiêu Lưu',
                genre_id: 12,
            },
            {
                title: 'Phim Hoạt Hình',
                genre_id: 16,
            },
            {
                title: 'Phim Hài',
                genre_id: 35,
            },
            {
                title: 'Phim Hình Sự',
                genre_id: 80,
            },
        ],
    },
    {
        title: 'Phim hay',
        child: [
            {
                title: 'Phim Tài Liệu',
                genre_id: 99,
            },
            {
                title: 'Phim Chính Kịch',
                genre_id: 18,
            },
            {
                title: 'Phim Gia Đình',
                genre_id: 10751,
            },
            {
                title: 'Phim Giả Tượng',
                genre_id: 14,
            },
            {
                title: 'Phim Lịch Sử',
                genre_id: 36,
            },
        ],
    },
    {
        title: 'Thông tin',
        child: [
            {
                title: 'Giới thiệu',
                link: '/about',
            },
            {
                title: 'Liên hệ chúng tôi',
                link: '/contact',
            },
            // {
            //     title: 'Điều khoản sử dụng',
            //     link: '/privacy-policy',
            // },
            {
                title: 'Chính sách riêng tư',
                link: '/privacy-policy',
            },
            {
                title: 'Khiếu nại bản quyền',
                link: '/copyright-complaint',
            },
        ],
    },
];

export const yearRelease: string[] = [
    '2024',
    '2023',
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
    '2013',
    '2012',
    '2011',
    '2010',
    '2009',
    '2008',
    '2007',
    '2006',
    '2005',
    '2004',
    '2003',
    '2002',
    '2001',
];

export const movieSidebar: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
