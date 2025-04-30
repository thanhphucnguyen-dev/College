
--1) Vẽ sơ đồ thông thương của các quan hệ
SELECT * FROM CAIDAT;
SELECT * FROM KHUVUC;
SELECT * FROM LOAI;
SELECT * FROM MAY;
SELECT * FROM PHANMEM;
SELECT * FROM PHONG;

-- 2) Loại của máy 'p8'
SELECT *
FROM	LOAI L JOIN MAY M ON M.IDLOAI = L.IDLOAI
WHERE IDMAY LIKE 'p8';

-- 3) Tên của các phần mềm 'UNIX'
SELECT	TENPM
FROM	PHANMEM
WHERE	IDLOAI LIKE 'UNIX';

-- 4) Tên phòng, địa chỉ IP phòng, mã phòng của các máy loại 'UNIX' hoặc 'PCWS'

SELECT	P.TENPHONG, P.IP, P.MP
FROM	PHONG P JOIN MAY M ON M.MP = P.MP
WHERE	M.IDLOAI LIKE 'PCWS' OR M.IDLOAI LIKE 'UNIX';

--5) Tên phòng, địa chỉ IP phòng, mã phòng của các máy loại 'UNIX' hoặc 'PCWS' ở
--khu vực '130.120.80', sắp xếp kết quả tăng dần theo mã phòng


SELECT	P.TENPHONG, P.IP, P.MP
FROM	KHUVUC KV JOIN PHONG P ON P.IP = KV.IP
				  JOIN MAY M ON M.MP = P.MP
WHERE	(M.IDLOAI LIKE 'UNIX' OR M.IDLOAI LIKE 'PCWS') AND (KV.IP LIKE '130.120.80')
ORDER BY M.MP;

-- 6) Số các phần mềm được cài đặt trên máy 'p6'

SELECT	COUNT(PM.IDPM) SOPM
FROM	PHANMEM PM JOIN CAIDAT CD ON CD.IDPM = PM.IDPM
WHERE IDMAY LIKE 'p6';

-- 7) Số các máy đã cài phần mềm 'log1'

SELECT DISTINCT COUNT(M.IDMAY) SOMAY
FROM	MAY M JOIN CAIDAT C ON C.IDMAY = M.IDMAY
WHERE	IDPM LIKE 'log1';

-- 8) Tên và địa chỉ IP (ví dụ: 130.120.80.1) đầy đủ của các máy loại 'TX'
SELECT * FROM MAY;

SELECT	TENMAY, (IP + '.' + AD) AS IPDAYDU
FROM	MAY
WHERE	IDLOAI LIKE 'TX';
***
-- 9) Tính số phần mềm đã cài đặt trên mỗi máy
SELECT	IDMAY, COUNT(IDPM) SOPM
FROM	CAIDAT
GROUP BY IDMAY
ORDER BY SOPM;
-- 10) Tính số máy mỗi phòng
SELECT TENPHONG, SOMAY
FROM PHONG;

-- 11) Tính số cài lần cài đặt của mỗi phần mềm trên các máy khác nhau
SELECT IDMAY, IDPM, COUNT(*) SOLANCAI
FROM CAIDAT
GROUP BY IDMAY, IDPM;

-- 12) Giá trung bình của các phần mềm UNIX
SELECT	AVG(GIA) GIATB
FROM	PHANMEM
WHERE	IDLOAI LIKE 'UNIX';

-- 13) Ngày mua phần mềm gần nhất
SELECT	MAX(NGAYMUA) NGAYGANNHAT
FROM	PHANMEM

-- 14) Số máy có ít nhất 2 phần mềm
SELECT * FROM CAIDAT;
SELECT	IDMAY, IDPM,  COUNT(*) SOPM
FROM	CAIDAT
GROUP BY IDMAY, IDPM HAVING COUNT(*) > 1;

SELECT COUNT(*)
FROM (
	SELECT IDMAY, COUNT(IDPM)
	FROM	CAIDAT
	GROUP BY IDMAY HAVING COUNT(*) > 1
)

-- 15) Tìm các loại không thuộc loại máy 
SELECT *
FROM	LOAI
WHERE	IDLOAI NOT IN (SELECT DISTINCT IDLOAI FROM MAY);

SELECT	*
FROM	LOAI L LEFT JOIN MAY M ON L.IDLOAI = M.IDLOAI
WHERE	IDMAY IS NULL;

-- 16)Tìm các loại thuộc cả hai loại máy và loại phần mềm
SELECT IDLOAI FROM MAY
INTERSECT
SELECT IDLOAI FROM PHANMEM;

-- 17)Tìm các loại máy không phải là loại phần mềm
SELECT IDLOAI FROM MAY
EXCEPT
SELECT IDLOAI FROM PHANMEM;
-- 19) Địa chỉ IP đầy đủ của các máy cài phần mềm tên 'Oracle 8'
SELECT	M.IP ,   M.AD
FROM	MAY M	JOIN CAIDAT C ON C.IDMAY = M.IDMAY
				JOIN PHANMEM P ON P.IDPM = C.IDPM
WHERE	P.TENPM LIKE 'Oracle 8';


-- 18) Địa chỉ IP đầy đủ của các máy cài phần mềm 'log6'
SELECT M.IP, M.AD
FROM	MAY M	JOIN CAIDAT C ON C.IDMAY = M.IDMAY
				JOIN PHANMEM P ON P.IDPM =  C.IDPM
WHERE	P.IDPM LIKE 'log6';
-- 19) Địa chỉ IP đầy đủ của các máy cài phần mềm tên 'Oracle 8'
SELECT M.IP, M.AD
FROM	MAY M	JOIN CAIDAT C ON C.IDMAY = M.IDMAY
				JOIN PHANMEM P ON P.IDPM =  C.IDPM
WHERE	P.TENPM LIKE 'Oracle 8';

-- 20) Tên của các khu vực có chính xác 3 máy loại 'TX'
SELECT * FROM KHUVUC;
SELECT TENKHUVUC
FROM 
	( SELECT	K.TENKHUVUC, M.IDLOAI, COUNT(M.IDLOAI) SO
	  FROM KHUVUC K JOIN MAY M ON M.IP = K.IP
	  GROUP BY M.IDLOAI,K.TENKHUVUC )
WHERE	IDLOAI LIKE 'TX' AND SO = 3;

--***

-- 21) Tên phòng có ít nhất một máy cài phần mềm tên 'Oracle 6'
SELECT	DISTINCT P.TENPHONG
FROM	PHONG P JOIN MAY M ON M.MP = P.MP
				JOIN CAIDAT C ON C.IDMAY = M.IDMAY
				JOIN PHANMEM PM ON PM.IDPM = C.IDPM
WHERE	PM.TENPM LIKE 'Oracle 6';

-- 22) Tên phần mềm được mua gần nhất

SELECT	TENPM
FROM	PHANMEM
WHERE	NGAYMUA = (SELECT MAX(NGAYMUA) FROM PHANMEM);

-- 23) Tên của phần mềm PCNT có giá lớn hơn bất kỳ giá của một phần mềm UNIX nào
SELECT TENPM
FROM	PHANMEM
WHERE	IDLOAI LIKE 'PCNT' AND GIA >= ALL (
		SELECT	MIN(GIA)
		FROM	PHANMEM
		WHERE IDLOAI LIKE 'UNIX' )
	
-- 24) Tên của phần mềm UNIX có giá lớn hơn tất cả các giá của các phần mềm PCNT
SELECT TENPM
FROM	PHANMEM
WHERE	IDLOAI LIKE 'UNIX' AND GIA >= ALL (
		SELECT	MIN(GIA)
		FROM	PHANMEM
		WHERE IDLOAI LIKE 'PCNT' )
-- 25) Tên của máy có ít nhất một phần mềm chung với máy 'p6' 

-- 26) Tên của các máy có cùng phần mềm như máy 'p6' (có thể nhiều phần mềm hơn máy 'p6') 

-- 27) Tên của các máy có chính xác các phần mềm như máy 'p2'