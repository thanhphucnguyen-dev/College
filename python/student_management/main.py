# student_management/main.py

# Danh sách lưu trữ sinh viên

students = []

# Hàm hiển thị menu
def show_menu():
    print("\n-----QUẢN LÝ SINH VIÊN------")
    print("1. Thêm sinh viên")
    print("2. Xem danh sách sinh viên")
    print("3. Cập nhật thông tin sinh viên")
    print("4. Xóa sinh viên")
    print("5. Tìm kiếm sinh viên")
    print("6. Thoát")
    print("---------------------------")

# Hàm thêm sinh viên mới
def add_student():
    print("\n----THÊM SINH VIÊN MỚI----")
    student_id = input("Nhập ID sinh viên: ")
    name = input("Nhập tên sinh viên: ")
    age = input("Nhập tuổi sinh viên: ")
    major = input("Nhập ngành học: ")
    
    student = {
        "student_id": student_id,
        "name": name,
        "age": age,
        "major": major
    }
    students.append(student)
    print("Sinh viên đã được thêm thành công!")
    print("---------------------------")
    
# Hàm xem danh sách sinh viên
def view_students():
    print("\n----XEM DANH SÁCH SINH VIÊN----")
    if not students:
        print("Chưa có sinh viên nào!")
        return
    print("{:<10} {:<20} {:<5} {:<15}".format("Mã SV", "Họ tên", "Tuổi", "Ngành học"))
    print("-" * 50)
    for student in students:
        print("{:<10} {:<20} {:<5} {:<15}".format(
            student["student_id"],
            student["name"],
            student["age"],
            student["major"]
        ))

# Cập nhật thông tin sinh viên
def update_student():
    print("\n----CẬP NHẬT THÔNG TIN SINH VIÊN----")
    if not students:
        print("Chưa có sinh viên nào!")
        return
    student_id = input("Nhập ID sinh viên cần cập nhật: ")
    for student in students:
        if student["student_id"] == student_id:
            print(f"Đang cập nhật thông tin sinh viên {student['name']}...")
            name = input("Nhập tên sinh viên: ")
            age = input("Nhập tuổi sinh viên: ")
            major = input("Nhập ngành học: ")
            student["name"] = name
            student["age"] = age
            student["major"] = major
            print("Thông tin sinh viên đã được cập nhật thành công!")
            return
    print("❌ Không tìm thấy sinh viên có mã: ", student_id)

# Xóa sinh viên
def delete_student():
    print("\n----XÓA SINH VIÊN----")
    if not students:
        print("Chưa có sinh viên nào!")
        return
    student_id = input("Nhập ID sinh viên cần xóa: ")
    for student in students:
        if student["student_id"] == student_id:
            students.remove(student)
            print("Sinh viên đã được xóa thành công!")
            return
    print("❌ Không tìm thấy sinh viên có mã: ", student_id)

# Vòng lặp chính của chươn trình
def main():
    while True:
        show_menu()
        choice = input("Nhập lựa chọn (1-6): ")
        if(choice == "1"):
            add_student()
        elif(choice == "2"):
            view_students() 
        elif(choice == "3"):
            update_student()
        elif(choice == "4"):
            delete_student()
        elif(choice == "5"):
            search_student()
        elif(choice == "6"):
            print("Cảm ơn bạn đã sử dụng chương trình!")
            break
        else:
            print("Vui lòng nhập lựa chọn hợp lệ!")


if __name__ == "__main__":
    main()