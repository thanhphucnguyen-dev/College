
-- 1. Tìm sự thông thương giữa các bảng trong CSDL\

-- 2. Mở các bảng dữ liệu để xem kiểu dữ liệu của từng trường và quan sát dữ liệu của từng bảng
SELECT * FROM KTRUCSU;
SELECT * FROM CGTRINH;
SELECT * FROM CHUNHAN;
SELECT * FROM CHUTHAU;
SELECT * FROM CONGNHAN;
SELECT * FROM THAMGIA;
SELECT * FROM THIETKE;

--3. Hãy cho biết thông tin về các kiến trúc sư có họ là Lê và sinh năm 1956
SELECT	*
FROM	KTRUCSU
WHERE	HOTEN_KTS LIKE 'le%' AND NAMS_KTS = 1956;

-- 4. Hãy cho biết tên các công trình bắt đầu trong khoảng 1/9/1994 đến 20/10/1994
SELECT	TEN_CTR, NGAY_BD
FROM	CGTRINH
WHERE	NGAY_BD >= '1994-09-01' AND NGAY_BD <= '1994-10-20';

/*	Trong SQL_Oracle: 
SELECT	TEN_CTR, NGAY_BD
FROM	CGTRINH
WHERE
		(EXTRACT(DAY FROM NGAY_BD) BETWEEN 1 AND 20) AND
		(EXTRACT(MONTH FROM NGAY_BD) BETWEEN 9 AND 10) AND
		(EXTRACT(YEAR FROM NGAY_BD)) = 1994;
*/
-- 5. Hãy cho biết tên và địa chỉ các công trình do chủ thầu ‘công ty xây dựng số 6’ thi 
-- công (chú ý: xem dữ liệu để lấy đúng tên công ty xây dựng số 6)

SELECT	TEN_CTR, DIACHI_CTR
FROM	CGTRINH
WHERE	TEN_THAU LIKE 'cty xd so 6';

-- 6. Tìm tên và địa chỉ liên lạc của các chủ thầu thi công công trình ở Cần Thơ do kiến 
-- trúc sư Lê Kim Dung thiết kế

SELECT	  C.TEN_THAU, DCHI_THAU
FROM	CHUTHAU C	JOIN CGTRINH CT ON CT.TEN_THAU = C.TEN_THAU
					JOIN THIETKE T ON T.STT_CTR = CT.STT_CTR
WHERE	TINH_THANH LIKE 'can tho' AND HOTEN_KTS LIKE 'le kim dung';

-- 7. Hãy cho biết nơi tốt nghiệp của các kiến trúc sư đã thiết kế công trình Khách sạn 
-- quốc tế ở Cần Thơ

SELECT	 KTS.HOTEN_KTS, KTS.NOI_TN
FROM	KTRUCSU	KTS JOIN THIETKE TK ON TK.HOTEN_KTS = KTS.HOTEN_KTS
					JOIN CGTRINH CTR ON CTR.STT_CTR = TK.STT_CTR
WHERE	CTR.TEN_CTR LIKE 'khach san quoc te' AND CTR.TINH_THANH LIKE 'can tho';

--8. Cho biết họ tên, năm sinh và năm vào nghề của các công nhân có chuyên môn hàn 
--hoặc điện đã tham gia các công trình mà chủ thầu Lê Văn Sơn đã trúng thầu

SELECT	CN.HOTEN_CN, CN.NAMS_CN, CN.NAM_VAO_N
FROM	CONGNHAN CN JOIN THAMGIA TG ON TG.HOTEN_CN = CN.HOTEN_CN
					JOIN CGTRINH CTR ON CTR.STT_CTR = TG.STT_CTR
WHERE	(CN.CH_MON LIKE 'dien' OR CN.CH_MON LIKE 'han') AND (CTR.TEN_THAU LIKE 'le van son');

--9. Những công nhân nào đã bắt đầu tham gia sông trình Khách sạn Quốc tế ở Cần Thơ 
-- trong giai đoạn từ ngày 15/12/1994 đến 31/12/1994

SELECT CN.*
FROM	CONGNHAN CN JOIN THAMGIA TG  ON TG.HOTEN_CN = CN.HOTEN_CN
					JOIN CGTRINH CTR ON CTR.STT_CTR = TG.STT_CTR
WHERE	(CTR.TEN_CTR LIKE 'khach san quoc te') 
	AND (CTR.TINH_THANH LIKE 'can tho') 
	AND ( NGAY_TGIA > '1994-12-15' AND NGAY_TGIA < '1994-12-31');

--10. Cho biết họ tên và năm sinh của các kiến trúc sư đã tốt nghiệp ở TP HCM và đã thiết 
--kế ít nhất một công trình có kinh phí đầu tư trên 400 triệu đồng

SELECT KTS.HOTEN_KTS, KTS.NAMS_KTS, CTR.KINH_PHI
FROM	KTRUCSU KTS JOIN THIETKE TK ON TK.HOTEN_KTS = KTS.HOTEN_KTS
					JOIN CGTRINH CTR ON CTR.STT_CTR = TK.STT_CTR
WHERE (KTS.NOI_TN LIKE 'tp hcm') AND  (CTR.KINH_PHI > 400 );

-- 11. Tìm họ tên và chuyên môn của các công nhân tham gia các công trình do kiến trúc 
--sư Lê Thanh Tùng thiết kế
SELECT	CN.HOTEN_CN, CN.CH_MON
FROM	THIETKE TK JOIN CGTRINH CTR ON CTR.STT_CTR = TK.STT_CTR	
				   JOIN THAMGIA TG ON TG.STT_CTR = CTR.STT_CTR
				   JOIN CONGNHAN CN ON CN.HOTEN_CN = TG.HOTEN_CN
WHERE	TK.HOTEN_KTS LIKE 'le thanh tung';

-- 12. Cho biết tên công trình có kinh phí cao nhất

SELECT TEN_CTR
FROM CGTRINH
WHERE KINH_PHI = (SELECT MAX(KINH_PHI)	FROM CGTRINH);


-- 13. Cho biết họ tên kiến trúc sư trẻ tuổi nhất

SELECT	HOTEN_KTS
FROM	KTRUCSU
WHERE NAMS_KTS = (SELECT MAX(NAMS_KTS) FROM KTRUCSU);

-- 14. Tìm tổng kinh phí của các công trình theo từng chủ thầu

SELECT CTR.TEN_THAU, SUM(CTR.KINH_PHI) TONG_KP
FROM	CGTRINH CTR JOIN CHUTHAU CT ON CT.TEN_THAU = CTR.TEN_THAU
GROUP BY CTR.TEN_THAU;

-- OR
select  ten_thau, SUM (kinh_phi) TONG_KP
from cgtrinh
group by ten_thau;


-- 15. Tìm tên và địa chỉ những chủ thầu đã trúng thầu công trình có kinh phí thấp nhất

SELECT CT.TEN_THAU, CT.DCHI_THAU
FROM CGTRINH CTR	JOIN CHUTHAU CT ON CT.TEN_THAU = CTR.TEN_THAU
WHERE CTR.KINH_PHI = (SELECT MIN(KINH_PHI) FROM CGTRINH);

-- 16. Cho biết họ tên các kiến trúc sư có tổng thù lao thiết kế các công trình lớn hơn 25  triệu
SELECT	TK.HOTEN_KTS, SUM(TK.THU_LAO) TONG
FROM KTRUCSU KTS JOIN THIETKE TK  ON TK.HOTEN_KTS = KTS.HOTEN_KTS
				 JOIN CGTRINH CTR ON CTR.STT_CTR = TK.STT_CTR
GROUP BY TK.HOTEN_KTS HAVING SUM(TK.THU_LAO) > 25

-- 17. Cho biết số lượng các kiến trúc sư có tổng thù lao thiết kế các công trình lớn hơn 25 triệu
CREATE TABLE CAU16 AS (
SELECT	TK.HOTEN_KTS, SUM(TK.THU_LAO) TONG
FROM KTRUCSU KTS JOIN THIETKE TK  ON TK.HOTEN_KTS = KTS.HOTEN_KTS
				 JOIN CGTRINH CTR ON CTR.STT_CTR = TK.STT_CTR
GROUP BY TK.HOTEN_KTS HAVING SUM(TK.THU_LAO) > 25
)

SELECT COUNT(HOTEN_KTS) SOLUONG FROM CAU16;

-- 18. Tính số công trình mà mỗi kiến trúc sư đã thiết kế

SELECT	TK.HOTEN_KTS, COUNT(*) SO_CT
FROM	CGTRINH CTR JOIN THIETKE TK ON TK.STT_CTR = CTR.STT_CTR
					JOIN KTRUCSU KTS ON KTS.HOTEN_KTS = TK.HOTEN_KTS
GROUP BY TK.HOTEN_KTS
ORDER BY SO_CT;
--OR

SELECT HOTEN_KTS, COUNT(STT_CTR) SO_CT
FROM THIETKE
GROUP BY HOTEN_KTS
ORDER BY SO_CT;

-- 19. Tính tổng số công nhân đã tham gia mỗi công trình
SELECT	CTR.TEN_CTR, COUNT(*) SOCN
FROM	THAMGIA TG JOIN CGTRINH CTR ON CTR.STT_CTR = TG.STT_CTR
GROUP BY CTR.TEN_CTR
ORDER BY SOCN DESC;

--OR

SELECT STT_CTR,  COUNT(HOTEN_CN) TONG
FROM THAMGIA
GROUP BY STT_CTR
ORDER BY STT_CTR;

-- 20. Tìm tên và địa chỉ công trình có tổng số công nhân tham gia nhiều nhất

-- 21. Cho biết tên các thành phố và kinh phí trung bình của các công trình của từng thành phố tương ứng
---------------------------------------------------\\
22. Cho biết tên và địa chỉ của các công trình mà công nhân Nguyễn Hồng Vân đang 
tham gia vào ngày 18/12/1994
23. Cho biết họ tên kiến trúc sư vừa thiết kế các công trình do Phòng dịch vụ Sở Xây 
dựng thi công, vừa thiết kế các công trình do chủ thầu Lê Văn Sơn thi công
24. Cho biết họ tên các công nhân có tham gia các công trình ở Cần Thơ nhưng không 
tham gia công trình ở Vĩnh Long
25. Cho biết tên của các chủ thầu đã thi công các công trình có kinh phí lớn hơn tất cả 
các công trình do chủ thầu Phòng dịch vụ sở xây dựng thi công
26. Cho biết họ tên các kiến trúc sư có thù lao thiết kế cho một công trình nào đó dưới 
giá trị trung bình thù lao thiết kế của các KTS.
27. Cho biết họ tên các công nhân có tổng số ngày tham gia vào các công trình lớn hơn 
tổng số ngày tham gia của công nhân Nguyễn Hồng Vân 
28. Cho biết họ tên công nhân có tham gia tất cả các công trình
29. Tìm các cặp tên của chủ thầu có trúng thầu các công trình tại cùng một thành phố
30. Tìm các cặp tên của các công nhân có lamg việc chung với nhau trong ít nhất là hai 
công trình