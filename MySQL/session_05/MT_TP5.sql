--8) Tên và địa chỉ IP (ví dụ: 130.120.80.1) đầy đủ của các máy loại 'TX'
select tenmay ,IP ||'.'|| ad as IP
from may where idloai='TX';
--15) Tìm các loại không thuộc loại máy
select *
from LOAI
where IDLOAI not in (select distinct IDLOAI from MAY);

-- cach khac
select *
from LOAI l left join  MAY m on l.idloai=m.idloai
Where idmay is null;

--25) Tên của máy có ít nhất một phần mềm chung với máy 'p6'
select distinct m.tenmay
from caidat cd, may m
where cd.idmay = m.idmay 
and cd.idpm in (select idpm from CAIDAT where IDMAY like 'p6')

--26) Tên của các máy có cùng phần mềm như máy 'p6' (có thể nhiều phần mềm hơn máy 'p6') 
select idmay
from caidat c join (select idpm from caidat where idmay='p6') p on c.idpm=p.idpm
where idmay<>'p6'
group by idmay having count(*) = (select count(*) from caidat where idmay='p6');

--27) Tên của các máy có chính xác các phần mềm như máy 'p2' -> chưa xong
 --giống câu 26
 create table c27 as
    select idmay
    from caidat c join (select idpm from caidat where idmay='p2') p on c.idpm=p.idpm
    where idmay<>'p2'
    group by idmay having count(*) = (select count(*) from caidat where idmay='p2')
-- tìm chính xác bảng
select idmay
from c27
where idmay in ( select idmay
                 from caidat 
                group by idmay having count(*) = (select count(*) from caidat where idmay='p2'))
drop table c27;
  
    