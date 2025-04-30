
--1) Xem d? li?u c?a t?t c? các b?ng
SELECT * FROM DOCGIA;
SELECT * FROM MUON;
SELECT * FROM SACH;
SELECT * FROM TACPHAM;

-- 2) V? s? ?? liên thông 

-- 3) Các tác ph?m (NT, t?a) c?a tác gi? 'Guy de Maupassant'. 
SELECT	NT, TUA
FROM	TACPHAM
WHERE	TACGIA LIKE 'Guy de Maupassant';

--4) Các ??c gi? s?ng ? ??a ch? '32 rue des Alouettes, 75003 Paris'. 
SELECT	HO, TEN
FROM	DOCGIA
WHERE	DCHI LIKE '32 rue des Alouettes, 75003 Paris';

--5) Tìm tên nhà xu?t b?n các tác ph?m bao g?m t? 'Fleur'
SELECT NXB
FROM	SACH S JOIN TACPHAM T ON T.NT = S.NT
WHERE	TUA LIKE '%Fleur%';

--6) Tìm tên các tác ph?m b?t ??u b?ng 'Le'
SELECT	TUA
FROM TACPHAM
WHERE TUA LIKE 'Le%';

--7) Tìm tên các ??c gi? có m??n sách trong trong kho?ng th?i gian t? ngày 15/9/2007 ??n  20/09/2007
SELECT	HO, TEN
FROM	DOCGIA D JOIN MUON M ON M.ND = D.ND
WHERE	NGAYMUON >= '2007-09-15' AND NGAYMUON <= '2007-09-20';

/*
	SELECT HO, TEN
	FROM DOCGIA D JOIN MUON M ON M.ND = D.ND
	WHERE
		EXTRACT(DAY FROM NGAYMUON) BETWEEN 15 AND 20
		EXTRACT (MONTH FROM NGAYMUON) = 09
		EXTRACT (YEAR FROM NGAYMUON) = 2007;
*/

-- 8) Nhà xu?t b?n c?a tác ph?m tiêu ?? 'Germinal'.
SELECT NXB
FROM SACH S JOIN TACPHAM T ON T.NT = S.NT
WHERE TUA LIKE 'Germinal ';

-- 9) Tên ??c gi? ?ã m??n tác ph?m 'Poésie'.
SELECT	D.TEN
FROM	TACPHAM T JOIN SACH S	ON S.NT = T.NT
				  JOIN MUON M	ON M.NS = S.NS
				  JOIN DOCGIA D ON D.ND = M.ND
WHERE T.TUA LIKE 'Poï¿½e';

-- 10) Nh?ng ??c gi? nào ?ã m??n tác ph?m Les 'Fleurs du mal'
SELECT D.*
FROM TACPHAM T JOIN SACH S ON S.NT = T.NT
			   JOIN MUON M ON M.NS = S.NS
			   JOIN DOCGIA D ON D.ND = M.ND
WHERE	TUA LIKE 'Les Fleurs du mal';

-- 11) Tìm các t?a sách, tên ??c gi? c?a các ??c gi? tr? sách quá th?i h?n cho phép
SELECT	T.TUA, D.TEN
FROM	TACPHAM T JOIN SACH S ON S.NT = T.NT
				  JOIN MUON M ON M.NS = S.NS
				  JOIN DOCGIA D ON D.ND = M.ND
WHERE	NGAYTRA > HANTRA;

-- 12) Tìm các t?a sách, tên ??c gi? c?a các ??c gi? tr? sách tr??c th?i h?n
SELECT T.TUA, D.TEN
FROM	TACPHAM T JOIN SACH S	ON S.NT = T.NT
				  JOIN MUON M	ON M.NS = S.NS
				  JOIN DOCGIA D ON D.ND = M.ND
WHERE	HANTRA > NGAYTRA;

-- 13) Tên ??c gi? ?ã m??n tác ph?m c?a 'Victor Hugo'

SELECT DISTINCT D.TEN
FROM	DOCGIA D JOIN MUON M	ON M.ND = D.ND
				 JOIN SACH S	ON S.NS = M.NS
				 JOIN TACPHAM T ON T.NT = S.NT
WHERE	T.TACGIA LIKE 'Victor Hugo';

-- 14) Tên ??c gi? và các tác ph?m ?ã ???c m??n n?m 2007
SELECT D.TEN, T.TUA, M.NGAYMUON
FROM	TACPHAM T	JOIN SACH S		ON S.NT = S.NT 
					JOIN MUON M		ON M.NS = S.NS
					JOIN DOCGIA D	ON D.ND = M.ND
WHERE YEAR(NGAYMUON) = 2007;

---------------------------------------------------------------------------
-- PH?N CÓ H??NG D?N 
--15) Tính s? tác ph?m có trong th? vi?n. 
SELECT COUNT(*) SOTP
FROM TACPHAM;

--16) Tựa của tác phẩm mà có ít nhất hai quyển sách. 

SELECT	S.NT, T.TUA, COUNT(*) SOTP
FROM	TACPHAM T JOIN SACH S ON S.NT = T.NT
GROUP BY S.NT, TUA HAVING COUNT(*) > 1
ORDER BY S.NT;

-- 17) Tính Số tác phẩm của mỗi tác giả.
SELECT	TACGIA, COUNT(TACGIA) SOTP
FROM	TACPHAM 
GROUP BY TACGIA
ORDER BY SOTP;

-- 18) Tính Số sách của mỗi tác phẩm.

SELECT		TUA, COUNT(*) SOSACH
FROM		TACPHAM T JOIN SACH S ON S.NT = T.NT
GROUP BY	TUA
ORDER BY	SOSACH;

-- 19) Tìm số lần mượn sách của mỗi độc giả theo năm

SELECT		ND, YEAR(NGAYMUON) NAM, COUNT(*) SOLANMUON
FROM		MUON
GROUP BY	ND, YEAR(NGAYMUON)
ORDER BY	ND;

-- 20) Tìm tên tác phẩm có ít nhất 3 sách

SELECT		S.NT, T.TUA,  COUNT(*) SOTP
FROM		TACPHAM T JOIN SACH S ON S.NT = T.NT
GROUP BY	S.NT, T.TUA HAVING COUNT(*) > 2
ORDER BY	NT;

-- 21) Tìm tên tác phẩm có nhiều sách nhất
SELECT * FROM SACH;
	-- CACH 1: 
SELECT		S.NT, T.TUA, COUNT(*) SOTP
FROM		TACPHAM T JOIN SACH S ON S.NT = T.NT
GROUP BY	S.NT, TUA HAVING COUNT(*) >= ALL(SELECT COUNT(NT) SOTP
											 FROM SACH 
											 GROUP BY NT);

	-- CACH 2:  // cách này chạy trong SQL Oracle
SELECT T.NT, TUA, COUNT(*) SOTP
FROM	TACPHAM T JOIN SACH S ON S.NT = T.NT
GROUP BY T.NT, TUA HAVING COUNT(*) >= (SELECT MAX(COUNT(*)) FROM SACH GROUP BY NT)
ORDER BY T.NT;

	-- CACH 3: 
CREATE TABLE CAU21 AS
			SELECT T.NT, TUA, COUNT(*) SOTP
			FROM	TACPHAM T JOIN SACH S ON S.NT = T.NT
			GROUP BY T.NT, TUA

SELECT TUA
FROM CAU21
WHERE SOTP = (SELECT MAX(SOTP) FROM CAU21;

DROP TABLE CAU21;



-- 22) Tên nhà xuất bản xuất bản nhiều sách nhất 
SELECT * FROM SACH;

SELECT	NXB, COUNT(*) SOTP
FROM	TACPHAM T JOIN SACH S ON S.NT = T.NT
GROUP BY	NXB HAVING COUNT(*) >= ALL (SELECT COUNT(NXB) SOTP
										FROM SACH
										GROUP BY NXB)
ORDER BY S.NXB;

-- 23) Tính Số tác giả có ít nhất hai tác phẩm 
SELECT COUNT(*) SOTG
FROM 
	(SELECT TACGIA, COUNT(*) SOTP
	FROM TACPHAM
	GROUP BY TACGIA HAVING COUNT(*) >= 2)

-- 24) Tìm tựa tác phẩm có nhiều người mượn nhất
SELECT	T.NT, T.TUA, COUNT(*) SOLAN
FROM	TACPHAM T JOIN SACH S ON S.NT = T.NT
				  JOIN MUON M ON M.NS = S.NS
GROUP BY T.NT, T.TUA HAVING COUNT(*) >= ALL (
			SELECT COUNT(*) SOLAN1
			FROM TACPHAM T JOIN SACH S ON T.NT = S.NT
						   JOIN MUON M ON M.NS = S.NS
			GROUP BY T.NT)

-- 25) Tìm tựa tác phẩm có ít người mượn nhất
SELECT	T.NT, TUA, COUNT(*) SOLAN
FROM	TACPHAM T JOIN SACH S ON S.NT = T.NT
				  JOIN MUON M ON M.NS = S.NS
GROUP BY T.NT, TUA HAVING COUNT(*) <= ALL (
					SELECT COUNT(*) SOLAN1
					FROM TACPHAM T JOIN SACH S ON S.NT = T.NT
								   JOIN MUON M ON M.NS = S.NS
					GROUP BY T.NT)

--26) Tìm độc giả mượn nhiều tác phẩm nhất
SELECT	D.TEN, COUNT(*) SOLAN
FROM	TACPHAM T JOIN SACH S	ON S.NT = T.NT
				  JOIN MUON M	ON M.NS = S.NS
				  JOIN DOCGIA D ON D.ND = M.ND
GROUP BY D.TEN HAVING COUNT(*) >= ALL (
				SELECT COUNT(*) SOTP
				FROM TACPHAM T JOIN SACH S	 ON S.NT = T.NT
							   JOIN MUON M	 ON M.NS = S.NS
							   JOIN DOCGIA D ON D.ND = M.ND
				GROUP BY D.TEN);


-- 27) Tìm tên độc giả mượn ít tác phẩm nhất
SELECT	D.TEN, COUNT(*) SOLAN
FROM	DOCGIA D	JOIN MUON M ON M.ND = D.ND
					JOIN SACH S ON S.NS = M.NS
					JOIN TACPHAM T ON T.NT = S.NT
GROUP BY D.TEN HAVING COUNT(*) <= ALL (
				SELECT COUNT(*) SOLAN
				FROM	DOCGIA D	JOIN MUON M ON D.ND = M.ND
									JOIN SACH S ON M.NS = S.NS
									JOIN TACPHAM T ON T.NT = S.NT
				GROUP BY D.TEN);

-- 28) Tìm tên tác phẩm có ít nhất một quyển sách không ai mượn
SELECT	TUA
FROM	TACPHAM T JOIN SACH S ON S.NT = T.NT
				  LEFT JOIN MUON M ON M.NS = S.NS
WHERE NGAYMUON IS NULL;

-- 29) Tìm tên tác phẩm có tất cả các quyển sách đều được mượn
SELECT TUA FROM TACPHAM

MINUS

SELECT TUA 
FROM TACPHAM T JOIN SACH S ON S.NT = T.NT
			LEFT JOIN MUON M ON M.NS = S.NS
WHERE NGAYMUON IS NULL;

-- 30) Tìm họ tên độc giả chưa mượn quyển sách nào
SELECT HO, TEN
FROM DOCGIA D LEFT JOIN MUON M ON M.ND = D.ND
WHERE NGAYMUON IS NULL;

--C2: 
SELECT HO, TEN
FROM DOCGIA
WHERE ND NOT IN (SELECT ND FROM MUON);

-- 31) Tìm thông tin về nhà suất bản của quyển sách mà chưa được ai mượn

SELECT TUA, NXB
FROM	TACPHAM T JOIN SACH S ON S.NT = T.NT 
					LEFT JOIN MUON M ON M.NS = S.NS
WHERE NGAYMUON IS NULL
ORDER BY NXB;
