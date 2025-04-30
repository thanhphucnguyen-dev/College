--Tai lieu duoc chia se boi GenzShare.com
--1.KHOAHOC(MAKH, TENKH, NGAYBD, NGAYKT)
create table  khoahoc (
    makh char (4) primary key,
    tenkh varchar(40) not null,
    ngayBD date not null,
    ngayKT date not null,
    constraint KH_CK check (ngayBD<ngayKT)
);


--2.CHUONGTRINH (MACT,TENCT)
create table  chuongtrinh (
    mact char (5) primary key,
    tenct varchar(100) not null
);


--3. LOAILOP (MALOAI, MACT, TENLOAI)
create table  loailop (
    maloai char (5) primary key,
    mact char (5) not null references chuongtrinh(mact),
    tenloai varchar (100) not null
);

create table LOAILOP (
   MALOAI               char(5)              not null  primary key,
   MACT                 char(5)              not null,
   TENLOAI              varchar(100)          not null,
   constraint FK_LOAILOP FOREIGN  key  (MACT) REFERENCES CHUONGTRINH(MACT)
);


--4. LOP (MALOP, MALOAI, TENLOP, SISO, MAKH) 
create table  lop (
    malop char (4) primary key,
    maloai char (5) not null ,
    tenlop varchar (50) not null,
    siso smallint   not null check(siso>12),
    makh char (4) references khoahoc(makh),
    foreign key (maloai) references loailop(maloai)
);


--5. HOCVIEN (MAHV,TENHV,SDT,NGAYSINH,GIOITINH,DIACHI)
create table  hocvien (
    mahv char (6) primary key,
    tenhv varchar (50) not null ,
    gioitinh smallint check (gioitinh in(0, 1)),
    ngaysinh date not null,
    sdt char(10),
    diachi varchar(50)
);

create table HOCVIEN (
   MAHV                 char(6)				primary key,
   TENHV                varchar(40)          not null,
   GIOITINH             smallint                  not null,
   NGAYSINH             date            not null,
   SDT                  char(10)                  not null,
   DIACHI               varchar(100)         not null
);

--6. PHIEUTHU(SOPT,MAHV, MALOP,NGAYLAPPHIEU,THANHTIEN) 
create table phieuthu(
    sopt char (8) primary key,
    mahv char (6) references hocvien(mahv),
    malop char (4) references lop(malop),
    ngaylapphieu date not null,
    thanhtien int check (thanhtien>0)
);

create table PHIEUTHU (
   SOPT                 CHAR(8)               PRIMARY KEY,
   MAHV                char(6)               not null,
   MALOP                char(4)              not null,
   NGAYLAPPHIEU         date	            not null,
   THANHTIEN        NUMERIC NOT NULL,
   constraint FK1_PT FOREIGN  key  (MAHV) REFERENCES HOCVIEN(MAHV),
   constraint FK2_PT FOREIGN  key  (MALOP) REFERENCES LOP(MALOP)
);


--7. MONHOC (MAMH, TENMH)
create table monhoc(
    mamh char(5) primary key,
    tenmh varchar(20) 
);

create table MONHOC (
   MAMH                 char(4)             PRIMARY KEY,
   TENMH                varchar(30)          not null
);



create table DIEM (
   MAMH                 char(4)              not null,
   MAHV                 char(6)                 not null,
   MALOP                char(4)              not null,
   DIEM                 float            not null CHECK(DIEM>=0),
   constraint PK_DIEM primary key  (MAMH, MAHV, MALOP),
    constraint FK1_DIEM FOREIGN  key  (MAHV) REFERENCES HOCVIEN(MAHV),
   constraint FK2_DIEM FOREIGN  key  (MALOP) REFERENCES LOP(MALOP),
   constraint FK3_DIEM FOREIGN  key  (MAMH) REFERENCES MONHOC(MAMH)
);


--8. DIEM (MAMH,MAHV,MALOP,DIEM)
create table diem(
    mamh char(4) not null references monhoc(mamh),
    mahv char (6) not null references hocvien(mahv),
    malop char (4) not null,
    diem float check (diem >=0.0 and diem <=10.0),
    primary key(mamh,mahv,malop),
    foreign key (malop) references lop(malop)
); 

--Cau 3:
INSERT INTO PHIEUTHU values   ('PT00008','HV0012','L001','06-02-2021',1350000);
-- Không thêm được vì khác định dạng ngày 2021-06-02 (DD-MM-YYYY) trong khi thiết lập của hệ thống là YYYY-MM-DD.
select *from phieuthu;

--Cau 4: 
INSERT INTO LOP values  ('L004','LL002','Lớp 4',10,'K001');
--Không thêm được vì điều kiện ràng buộc của siso >12 nhưng ở lệnh yêu cầu trên là 10 => Không thỏa điều kiện.

--Cau 5:
delete from khoahoc where makh='K001';
--Không xoá được vì 'K001' cũng là giá trị nằm trong table LOP - Ràng buộc.

--Cau 6: 
delete from khoahoc where makh='K002';
--Xoá được vì 'K002' không được sử dụng trong bất kì table nào khác.

--Cau 7:
update phieuthu set thanhtien=thanhtien*0.9 where sopt='PT000001'

--Cau8:
select *from lop;
alter table lop add hocphi smallint;
update lop set hocphi=1350000 where  maloai='LL001';
update lop set hocphi=1650000 where  lower(maloai)='LL002';


--Cau 9:
create table hocvien_nam(
    mahv char (6) primary key,
    tenhv varchar (50) not null ,
    gioitinh smallint check (gioitinh in(0))
    sdt char(10),
    ngaysinh date not null,
    diachi varchar(50)
);

-- Cau 10: 
select * from hocvien_nam;
insert into hocvien_nam
    select mahv, tenhv, ngaysinh, sdt, diachi
    from hocvien
    where gioitinh='0';

--Cau 11: 
DROP table khoahoc;
--Không xoá được vì thuộc tính trong khoahoc là khoá của table khác

--Cau 12: 
DROP table hocvien_nam;
--Xoá được vì không có thuộc tính nào của table hocvien_nam là khoá của table khác;

--Cau 13:
alter table monhoc alter column tenmh VARCHAR(100);